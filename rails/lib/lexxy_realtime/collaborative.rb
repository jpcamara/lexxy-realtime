# frozen_string_literal: true

require "active_support/concern"

module LexxyRealtime
  # The model half: `has_collaborative_rich_text :body` declares a regular
  # Action Text attribute whose live edits sync through the collaborative
  # document, and which the server materializes back into the stored rich
  # text (see #materialize_collaborative_rich_text!).
  module Collaborative
    extend ActiveSupport::Concern

    included do
      class_attribute :collaborative_rich_text_names, instance_writer: false, default: [].freeze
    end

    class_methods do
      # No `encrypted:` option, deliberately: the collaborative document is
      # stored as plaintext CRDT update rows, so encrypting only the Action
      # Text association would imply an at-rest confidentiality the update log
      # doesn't provide. Encrypt-at-rest support has to cover the store too.
      def has_collaborative_rich_text(name) # rubocop:disable Naming/PredicatePrefix
        has_rich_text(name) if respond_to?(:has_rich_text)
        self.collaborative_rich_text_names = (collaborative_rich_text_names + [name.to_sym]).freeze

        # Reading the attribute always returns the latest collaborative state:
        # if the update log is newer than the materialized value, it's rendered
        # inline before the read returns (read-your-own-writes — leaving the
        # editor for the show page never shows a stale body). The debounced job
        # still runs, so most reads find the value already fresh and skip this.
        staleness_check = Module.new do
          define_method(name) do
            materialize_collaborative_rich_text_if_stale!(name) unless @materializing_collaborative_rich_text
            super()
          end
        end
        prepend staleness_check
      end
    end

    # The stable server-side document key for one collaborative field. Clients
    # never send this — the channel derives it after resolving the record from
    # a signed GlobalID. Built from the class name (not model_name.param_key,
    # which collapses namespaces: Blog::Post and News::Post both report
    # "post" and would share documents).
    def collaborative_document_key(name)
      "#{self.class.name.underscore.tr('/', '_')}/#{id}/#{name}"
    end

    def collaborative_rich_text?(name)
      collaborative_rich_text_names.include?(name.to_sym)
    end

    # Render the collaborative document to HTML server-side (Y::Lexxy — the
    # same markup the editor itself serializes) and save it as the regular
    # attribute value, so `record.body` always reflects the collaborative
    # state. Returns false when there is no recorded document yet.
    #
    # Idempotent: it renders whatever the store currently holds, so re-running
    # after further edits just converges on the newer state.
    # Serialized per record (with_lock) so concurrent jobs can't overwrite a
    # newer materialization with an older one: the state is loaded inside the
    # lock, so the last writer always rendered the newest state it could see.
    def materialize_collaborative_rich_text!(name)
      unless collaborative_rich_text?(name)
        raise ArgumentError, "#{name.inspect} is not a collaborative rich text on #{self.class.name}"
      end

      # Action Text's attribute WRITER reads the attribute (to get-or-build
      # the rich text record), and the reader materializes when stale — so an
      # unguarded materialize would recurse through its own assignment. Flag
      # the window; the reader wrap checks it.
      @materializing_collaborative_rich_text = true
      with_lock do
        state = LexxyRealtime.store.load(collaborative_document_key(name))
        break false if state.nil?

        doc = Y::Doc.new
        doc.apply_update(state)
        html = Y::Lexxy.new(doc).to_html
        break false if html.nil?

        public_send("#{name}=", html)
        # validate: false — this is a system-written projection of content the
        # collaboration flow already accepted; an unrelated model validation
        # must not 500 a read or wedge the job. User-initiated saves validate
        # as usual.
        save!(validate: false)
        true
      end
    ensure
      @materializing_collaborative_rich_text = false
    end

    # Materialize only when the update log is newer than the materialized
    # value. Nil-safe on every edge: unpersisted records, stores without
    # latest_change_at (custom stores; staleness then rides the job alone),
    # and documents that were never edited.
    #
    # Freshness is exact once writes quiesce and best-effort during them: an
    # update appended mid-materialization lands before the projection's
    # timestamp, so the projection reads as fresh without it (same as the
    # lock-contention rescue below serving the current value). Both windows
    # are bounded by the debounce — every appended update has already
    # scheduled the job that converges the projection.
    def materialize_collaborative_rich_text_if_stale!(name)
      return false unless persisted?

      store = LexxyRealtime.store
      return false unless store.respond_to?(:latest_change_at)

      latest = store.latest_change_at(collaborative_document_key(name))
      return false if latest.nil?

      materialized_at = collaborative_rich_text_materialized_at(name)
      return false if materialized_at && materialized_at > latest

      materialize_collaborative_rich_text!(name)
    rescue ActiveRecord::LockWaitTimeout, ActiveRecord::Deadlocked, ActiveRecord::StatementTimeout
      # Freshness on read is best-effort under write contention: while peers
      # are actively typing, the per-record lock (or SQLite's single writer)
      # can be busy. Serve the current value rather than fail the page — the
      # debounced job converges moments later.
      false
    end

    private

    # When the attribute was last materialized: the rich-text record's own
    # timestamp under Action Text, falling back to the record's updated_at
    # (coarser — any save counts as fresh — but only reachable without
    # Action Text loaded).
    def collaborative_rich_text_materialized_at(name)
      if respond_to?("rich_text_#{name}")
        public_send("rich_text_#{name}")&.updated_at
      else
        updated_at
      end
    end
  end
end
