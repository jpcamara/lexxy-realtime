# frozen_string_literal: true

require "active_support/concern"

module LexxyRealtime
  # `has_collaborative_rich_text :body`: an attribute whose live edits sync
  # through the collaborative document and render back into the stored value
  # on every recorded change, so reads are plain reads. With Action Text on
  # the model it layers on has_rich_text; without it, it renders into a
  # plain attribute.
  #
  # Only the macro is installed globally; the instance API below is
  # included when a model declares an attribute.
  module Collaborative
    extend ActiveSupport::Concern

    class_methods do
      def has_collaborative_rich_text(name, **options) # rubocop:disable Naming/PredicatePrefix
        include Model unless include?(Model)
        # Action Text is optional: has_rich_text when the model has it, a
        # plain attribute otherwise. The document works the same either way.
        has_rich_text(name, **options) if respond_to?(:has_rich_text)
        self.collaborative_rich_text_names = (collaborative_rich_text_names + [name.to_sym]).freeze

        # encrypted: true encrypts both halves of the storage: Action Text
        # swaps in ActionText::EncryptedRichText for the rendered body, and
        # the document association swaps in Y::EncryptedDocument for the
        # CRDT state and update payloads. Without Action Text, declare
        # `encrypts` on the plain attribute yourself.
        document_class = options[:encrypted] ? "Y::EncryptedDocument" : "Y::Document"
        has_one :"collaborative_document_#{name}", -> { where(name: name) },
                class_name: document_class, as: :record, inverse_of: :record, dependent: :destroy
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
      # The class comes from the association, so an encrypted attribute
      # creates a Y::EncryptedDocument. `.for` tolerates two clients joining
      # at once; the association target is then repaired, since the miss was
      # cached.
      def collaborative_document!(name)
        collaborative_document(name) || begin
          klass = self.class.reflect_on_association(:"collaborative_document_#{name}").klass
          document = klass.for(self, name)
          association(:"collaborative_document_#{name}").target = document
          document
        end
      end

      # Render the document server-side (Y::Lexxy — the editor's own markup)
      # and save it as the attribute. The channel calls this after recording
      # each change, so the stored value tracks the document write-through.
      # Locked per record and state loaded inside the lock, so concurrent
      # renders across processes converge on the latest state; false when
      # nothing is recorded.
      def materialize_collaborative_rich_text!(name)
        ensure_collaborative!(name)

        document = collaborative_document(name)
        return false unless document

        with_lock do
          # A system save: the app's strict_loading must not stop the
          # Action Text writer from lazily loading its rich-text row.
          strict_loading!(false) if strict_loading?
          state = document.reload.load_state
          break false if state.nil?

          doc = Y::Doc.new
          doc.apply_update(state)
          html = Y::Lexxy.new(doc).to_html
          break false if html.nil?

          public_send("#{name}=", html)
          save!(validate: false) # skip model validations for this system-managed save
          true
        end
      end

      private

      def ensure_collaborative!(name)
        return if collaborative_rich_text?(name)

        raise ArgumentError, "#{name.inspect} is not collaborative on #{self.class.name}"
      end
    end
  end
end
