# frozen_string_literal: true

require "active_support/concern"

module LexxyRealtime
  # `has_collaborative_rich_text :body`: an attribute whose live edits sync
  # through the collaborative document and materialize back into the stored
  # value. With Action Text on the model it layers on has_rich_text; without
  # it, it materializes into a plain attribute. Reads are fresh — the reader
  # materializes first whenever the document is newer than the stored value.
  #
  # Only the macro is installed globally; the instance API below is
  # included when a model declares an attribute.
  module Collaborative
    extend ActiveSupport::Concern

    class_methods do
      def has_collaborative_rich_text(name, **options) # rubocop:disable Naming/PredicatePrefix
        # The document stores plaintext CRDT bytes, so encrypted rich text
        # is unsupported.
        raise ArgumentError, "encrypted: is not supported (the update log is plaintext)" if options.key?(:encrypted)

        include Model unless include?(Model)
        # Action Text is optional: has_rich_text when the model has it, a
        # plain attribute otherwise. The document and log work the same
        # either way.
        has_rich_text(name, **options) if respond_to?(:has_rich_text)
        self.collaborative_rich_text_names = (collaborative_rich_text_names + [name.to_sym]).freeze

        has_one :"collaborative_document_#{name}", -> { where(name: name) },
                class_name: "Y::Document", as: :record, inverse_of: :record, dependent: :destroy

        # One stable, inspectable module per model for the generated readers.
        unless const_defined?(:CollaborativeRichTextMethods, false)
          const_set(:CollaborativeRichTextMethods, Module.new)
          prepend const_get(:CollaborativeRichTextMethods, false)
        end
        const_get(:CollaborativeRichTextMethods, false).define_method(name) do
          materialize_collaborative_rich_text_if_stale!(name) unless @materializing_collaborative_rich_text
          super()
        end
      end
    end

    # The instance API, present only on models that declared an attribute.
    module Model
      extend ActiveSupport::Concern

      included do
        class_attribute :collaborative_rich_text_names, instance_writer: false, default: [].freeze
      end

      def collaborative_rich_text?(name) = collaborative_rich_text_names.include?(name.to_sym)

      # The document, if collaboration has started (nil until the first join).
      def collaborative_document(name) = public_send("collaborative_document_#{name}")

      # The document, created on first use — the channel calls this when a
      # client joins, so creation happens server-side, already authorized.
      # Y::Document.for tolerates two clients joining at once; the association
      # target is then repaired, since the miss was cached.
      def collaborative_document!(name)
        collaborative_document(name) || begin
          document = Y::Document.for(self, name)
          association(:"collaborative_document_#{name}").target = document
          document
        end
      end

      # :fresh (provably current), :stale (provably behind), or :unknown (no
      # document yet, or nothing recorded). One column comparison — the
      # document stamps changed_at on content changes and compacting leaves it
      # alone. The reader acts on :stale; the job acts on anything but :fresh.
      def collaborative_rich_text_freshness(name)
        document = collaborative_document(name)
        return :unknown unless document&.changed_at

        document.materialized_at && document.materialized_at >= document.changed_at ? :fresh : :stale
      end

      # Schedule materialization of a just-recorded change, after
      # LexxyRealtime.materialize_after. Raises when the job can't be
      # enqueued, so the channel can reject the change and the client
      # retransmits.
      def materialize_collaborative_rich_text_later(name)
        ensure_collaborative!(name)
        LexxyRealtime::MaterializeJob.set(wait: LexxyRealtime.materialize_after)
                                     .perform_later(self, name.to_s) || raise("materialize enqueue failed")
      rescue NotImplementedError
        # The inline adapter can enqueue but not schedule (enqueue_at raises).
        # Render now instead of rejecting every edit.
        LexxyRealtime::MaterializeJob.perform_later(self, name.to_s) || raise("materialize enqueue failed")
      end

      # Render the document server-side (Y::Lexxy — the editor's own markup)
      # and save it as the attribute. Locked per record, state loaded inside
      # the lock, so concurrent runs converge; false when nothing is recorded.
      def materialize_collaborative_rich_text!(name)
        ensure_collaborative!(name)

        document = collaborative_document(name)
        return false unless document

        # Action Text's writer reads the attribute (get-or-build), and reads
        # materialize when stale — flag the window or the assignment recurses.
        @materializing_collaborative_rich_text = true
        with_lock do
          # The watermark: changed_at as read before the load. The document
          # is stamped with this time, so an update landing mid-render moves
          # changed_at past it and the scheduled job re-renders. The
          # projection converges once writes quiesce.
          document.reload
          as_of = document.changed_at
          state = document.load_state
          break false if state.nil?

          doc = Y::Doc.new
          doc.apply_update(state)
          html = Y::Lexxy.new(doc).to_html
          break false if html.nil?

          public_send("#{name}=", html)
          save!(validate: false) # a system-written projection; validations belong to user saves
          document.update_column(:materialized_at, as_of) if as_of
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

      private

      def ensure_collaborative!(name)
        return if collaborative_rich_text?(name)

        raise ArgumentError, "#{name.inspect} is not collaborative on #{self.class.name}"
      end
    end
  end
end
