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
        # nodes: is ours, not Action Text's — Y::Lexxy render rules for the
        # app's custom Lexical nodes, applied when the document materializes.
        nodes = options.delete(:nodes)
        has_rich_text(name, **options) if respond_to?(:has_rich_text)
        self.collaborative_rich_text_names = (collaborative_rich_text_names + [name.to_sym]).freeze
        self.collaborative_rich_text_rules =
          collaborative_rich_text_rules.merge(name.to_sym => (nodes || {}).freeze).freeze

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
        class_attribute :collaborative_rich_text_rules, instance_writer: false, default: {}.freeze
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
          renderer = Y::Lexxy.new(doc, nodes: collaborative_rich_text_rules[name.to_sym] || {})
          html = renderer.to_html
          break false if html.nil?

          report_unknown_node_types(name, renderer)
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

      # A custom Lexical node with no render rule degrades in the stored
      # HTML — a decorator-style node renders as nothing — while live
      # editors keep showing it. Instrument every occurrence so apps can
      # alert, and log once per class/field/type set so the first
      # materialization makes the divergence visible. unknown_types arrived
      # in yrby 0.8; an older yrby renders identically but can't report.
      def report_unknown_node_types(name, renderer)
        return unless renderer.respond_to?(:unknown_types)

        types = renderer.unknown_types
        return if types.empty?

        ActiveSupport::Notifications.instrument(
          "unknown_node_types.lexxy_realtime",
          record: self, field: name.to_s, types: types
        )
        return unless LexxyRealtime.first_sighting_of_unknown_types?([self.class.name, name.to_s, types])

        Rails.logger&.warn(
          "#{self.class.name}##{name} contains Lexical node types with no Y::Lexxy render rule: " \
          "#{types.join(', ')}. They degrade in the stored HTML (a decorator-style node renders as " \
          "nothing) while live editors still show them. Declare rules with " \
          "has_collaborative_rich_text :#{name}, nodes: { ... }."
        )
      end
    end
  end
end
