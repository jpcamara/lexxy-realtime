# frozen_string_literal: true

require "active_support/concern"

module LexxyRealtime
  # `has_collaborative_rich_text :body`: a regular Action Text attribute whose
  # live edits sync through the collaborative document and materialize back
  # into the stored rich text. Reads are fresh — the reader materializes first
  # whenever the update log is newer than the stored value.
  module Collaborative
    extend ActiveSupport::Concern

    included do
      class_attribute :collaborative_rich_text_names, instance_writer: false, default: [].freeze
    end

    class_methods do
      # No encrypted: option — the update log stores plaintext CRDT rows.
      def has_collaborative_rich_text(name) # rubocop:disable Naming/PredicatePrefix
        has_rich_text(name) if respond_to?(:has_rich_text)
        self.collaborative_rich_text_names = (collaborative_rich_text_names + [name.to_sym]).freeze

        staleness_check = Module.new do
          define_method(name) do
            materialize_collaborative_rich_text_if_stale!(name) unless @materializing_collaborative_rich_text
            super()
          end
        end
        prepend staleness_check
      end
    end

    # Derived from the class name (param_key collapses namespaces); clients
    # never send keys.
    def collaborative_document_key(name) = "#{self.class.name.underscore.tr('/', '_')}/#{id}/#{name}"

    def collaborative_rich_text?(name) = collaborative_rich_text_names.include?(name.to_sym)

    # :fresh (provably current), :stale (provably behind), or :unknown (no
    # latest_change_at on the store, or nothing recorded yet). The reader acts
    # on :stale; the job acts on anything but :fresh.
    def collaborative_rich_text_freshness(name)
      store = LexxyRealtime.store
      return :unknown unless store.respond_to?(:latest_change_at)

      latest = store.latest_change_at(collaborative_document_key(name))
      return :unknown if latest.nil?

      done_at = respond_to?("rich_text_#{name}") ? public_send("rich_text_#{name}")&.updated_at : updated_at
      done_at && done_at > latest ? :fresh : :stale
    end

    # Render the document server-side (Y::Lexxy — the editor's own markup) and
    # save it as the attribute. Locked per record, state loaded inside the
    # lock, so concurrent runs converge; false when nothing is recorded.
    def materialize_collaborative_rich_text!(name)
      unless collaborative_rich_text?(name)
        raise ArgumentError,
              "#{name.inspect} is not collaborative on #{self.class.name}"
      end

      # Action Text's WRITER reads the attribute (get-or-build), and reads
      # materialize when stale — flag the window or the assignment recurses.
      @materializing_collaborative_rich_text = true
      with_lock do
        state = LexxyRealtime.store.load(collaborative_document_key(name))
        break false if state.nil?

        doc = Y::Doc.new
        doc.apply_update(state)
        html = Y::Lexxy.new(doc).to_html
        break false if html.nil?

        public_send("#{name}=", html)
        save!(validate: false) # a system-written projection; validations belong to user saves
        true
      end
    ensure
      @materializing_collaborative_rich_text = false
    end

    # The read path. Skips dirty instances (with_lock raises on unsaved
    # changes, and the save would commit them) and serves the current value
    # under lock contention — exact once writes quiesce, best-effort during
    # them; the per-edit job converges either way.
    def materialize_collaborative_rich_text_if_stale!(name)
      return false unless persisted? && !has_changes_to_save?
      return false unless collaborative_rich_text_freshness(name) == :stale

      materialize_collaborative_rich_text!(name)
    rescue ActiveRecord::LockWaitTimeout, ActiveRecord::Deadlocked, ActiveRecord::StatementTimeout
      false
    end
  end
end
