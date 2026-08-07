# frozen_string_literal: true

require "active_support/concern"

module LexxyRealtime
  # Adds Y::Document-backed collaboration to an attribute. When Action
  # Text is available, it declares the corresponding +has_rich_text+
  # association.
  module Collaborative
    extend ActiveSupport::Concern

    class_methods do
      def has_collaborative_rich_text(name, **options) # rubocop:disable Naming/PredicatePrefix
        include Model unless include?(Model)
        has_rich_text(name, **options) if respond_to?(:has_rich_text)
        self.collaborative_rich_text_names = (collaborative_rich_text_names + [name.to_sym]).freeze

        # encrypted: true encrypts both halves: has_rich_text gets the
        # option (an encrypted body), and the document stores CRDT state
        # through Y::EncryptedDocument. Without Action Text, declare
        # +encrypts+ on the plain attribute yourself.
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

      # Creates the document on first use. The association supplies the
      # class, so an encrypted attribute gets a Y::EncryptedDocument.
      def find_or_create_collaborative_document(name)
        collaborative_document(name) || begin
          association(:"collaborative_document_#{name}").klass.for(self, name)
          public_send("reload_collaborative_document_#{name}")
        end
      end

      # Reloads and renders the document while holding the record lock,
      # then saves the HTML through the attribute writer. Returns false
      # when the document has no state.
      def refresh_collaborative_rich_text(name)
        ensure_collaborative!(name)

        document = collaborative_document(name)
        return false unless document

        with_lock do
          strict_loading!(false) if strict_loading? # the writer lazily loads the rich-text row
          state = document.reload.load_state
          break false if state.nil?

          doc = Y::Doc.new
          doc.apply_update(state)
          html = Y::Lexxy.new(doc).to_html
          break false if html.nil?

          public_send("#{name}=", html)
          save!(validate: false) # collaboration updates should not run unrelated model validations
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
