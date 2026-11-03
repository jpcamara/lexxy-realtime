# frozen_string_literal: true

require "active_support/concern"
require "lexxy_realtime/attribute"

module LexxyRealtime
  # Adds collaborative Lexxy editing to an attribute. yrby-rails'
  # Y::Collaborative stores the document. When Action Text is available,
  # this also declares the matching +has_rich_text+ association.
  module Collaborative
    extend ActiveSupport::Concern

    class_methods do
      def has_collaborative_rich_text(name, **options) # rubocop:disable Naming/PredicatePrefix
        # The yrby-rails engine includes Y::Collaborative into Active Record.
        # Including it here too covers models loaded without the engine.
        include Y::Collaborative unless include?(Y::Collaborative)
        include Model unless include?(Model)
        # Action Text doesn't accept nodes:, so take it out first. It holds
        # the Y::Lexxy render rules for the app's custom Lexical nodes.
        nodes = options.delete(:nodes)
        has_rich_text(name, **options) if respond_to?(:has_rich_text)
        self.collaborative_rich_text_names = (collaborative_rich_text_names + [name.to_sym]).freeze
        self.collaborative_rich_text_rules =
          collaborative_rich_text_rules.merge(name.to_sym => (nodes || {}).dup.freeze).freeze

        # encrypted: true encrypts the rendered body and the document.
        # has_rich_text receives the option for the body, and
        # Y::EncryptedDocument stores the document. Without Action Text,
        # declare +encrypts+ on the plain attribute yourself.
        has_collaborative_document(name, encrypted: options[:encrypted] || false)
      end
    end

    # Instance methods. Only models that declare a collaborative attribute include them.
    module Model
      extend ActiveSupport::Concern

      included do
        class_attribute :collaborative_rich_text_names, instance_writer: false, default: [].freeze
        class_attribute :collaborative_rich_text_rules, instance_writer: false, default: {}.freeze

        after_destroy :destroy_collaborative_documents
      end

      def collaborative_rich_text?(name) = collaborative_rich_text_names.include?(name.to_sym)

      # A rich-text field's document is a LexxyRealtime::Attribute, with this
      # gem's grant and channel. Other fields get yrby-rails' document.
      def collaborative_document(name)
        collaborative_rich_text?(name) ? LexxyRealtime::Attribute.new(self, name) : super
      end

      # Deprecated. Use collaborative_document(name).grant.
      def collaborative_rich_text_grant(name, expires_in: nil)
        LexxyRealtime.deprecator.warn(
          "collaborative_rich_text_grant(name) is deprecated. Use collaborative_document(name).grant instead."
        )
        ensure_collaborative!(name)
        collaborative_document(name).grant(expires_in:)
      end

      # Deprecated. Use collaborative_document(name).refresh.
      def refresh_collaborative_rich_text(name)
        LexxyRealtime.deprecator.warn(
          "refresh_collaborative_rich_text(name) is deprecated. Use collaborative_document(name).refresh instead."
        )
        ensure_collaborative!(name)
        collaborative_document(name).refresh
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
    end
  end
end
