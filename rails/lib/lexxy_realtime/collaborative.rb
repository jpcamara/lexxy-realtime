# frozen_string_literal: true

require "active_support/concern"

module LexxyRealtime
  # Adds collaborative Lexxy editing to an attribute. Storage and the signed
  # token come from yrby-rails' Y::Collaborative. When Action Text is
  # available, it also declares the matching +has_rich_text+ association.
  module Collaborative
    extend ActiveSupport::Concern

    class_methods do
      def has_collaborative_rich_text(name, **options) # rubocop:disable Naming/PredicatePrefix
        # The yrby-rails engine includes Y::Collaborative into Active Record.
        # Including it here too covers models loaded without the engine.
        include Y::Collaborative unless include?(Y::Collaborative)
        include Model unless include?(Model)
        # nodes: is ours, not Action Text's. It holds Y::Lexxy render rules
        # for the app's custom Lexical nodes.
        nodes = options.delete(:nodes)
        has_rich_text(name, **options) if respond_to?(:has_rich_text)
        self.collaborative_rich_text_names = (collaborative_rich_text_names + [name.to_sym]).freeze
        self.collaborative_rich_text_rules =
          collaborative_rich_text_rules.merge(name.to_sym => (nodes || {}).dup.freeze).freeze

        # encrypted: true encrypts both halves. has_rich_text gets the option
        # for the body, and the document is stored through
        # Y::EncryptedDocument. Without Action Text, declare +encrypts+ on
        # the plain attribute yourself.
        has_collaborative_document(name, encrypted: options[:encrypted] || false)
      end
    end

    # The instance API, present only on models that declared an attribute.
    module Model
      extend ActiveSupport::Concern

      included do
        class_attribute :collaborative_rich_text_names, instance_writer: false, default: [].freeze
        class_attribute :collaborative_rich_text_rules, instance_writer: false, default: {}.freeze

        after_destroy :destroy_collaborative_documents
      end

      def collaborative_rich_text?(name) = collaborative_rich_text_names.include?(name.to_sym)

      # Reloads and renders the document while holding the record lock,
      # then saves the HTML through the attribute writer. Returns false
      # when the document has no state.
      def refresh_collaborative_rich_text(name)
        ensure_collaborative!(name)

        with_lock do
          strict_loading!(false) if strict_loading? # the writer lazily loads the rich-text row
          state = collaborative_document(name).load_state
          break false if state.nil?

          doc = Y::Doc.new
          doc.apply_update(state)
          renderer = Y::Lexxy.new(doc, nodes: collaborative_rich_text_rules.fetch(name.to_sym))
          html = renderer.to_html
          break false if html.nil?

          report_unknown_node_types(name, renderer)
          public_send("#{name}=", html)
          save!(validate: false) # collaboration updates should not run unrelated model validations
          true
        end
      end

      private

      # Deletes each attribute's document and its updates with the record.
      def destroy_collaborative_documents
        collaborative_rich_text_names.each do |name|
          self.class.collaborative_document_class(name).where(record: self, name: name.to_s).destroy_all
        end
      end

      def ensure_collaborative!(name)
        return if collaborative_rich_text?(name)

        raise ArgumentError, "#{name.inspect} is not collaborative on #{self.class.name}"
      end

      # Live editors show a custom node that the stored HTML can't render
      # without a rule. Warn once per class, field, and set of types.
      def report_unknown_node_types(name, renderer)
        types = renderer.unknown_types.sort
        return if types.empty?
        return unless LexxyRealtime.first_sighting_of_unknown_types?([self.class.name, name.to_s, types])

        Rails.logger&.warn(
          "#{self.class.name}##{name} contains Lexical node types with no Y::Lexxy render rule: " \
          "#{types.join(', ')}. The stored HTML drops their markup, and a decorator node renders " \
          "nothing. Add rules with has_collaborative_rich_text :#{name}, nodes: { ... }."
        )
      end
    end
  end
end
