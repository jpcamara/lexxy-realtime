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
      def has_collaborative_rich_text(name, encrypted: false) # rubocop:disable Naming/PredicatePrefix
        has_rich_text(name, encrypted: encrypted) if respond_to?(:has_rich_text)
        self.collaborative_rich_text_names = (collaborative_rich_text_names + [name.to_sym]).freeze
      end
    end

    # The stable server-side document key for one collaborative field. Clients
    # never send this — the channel derives it after resolving the record from
    # a signed GlobalID.
    def collaborative_document_key(name)
      "#{model_name.param_key}/#{id}/#{name}"
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
    def materialize_collaborative_rich_text!(name)
      unless collaborative_rich_text?(name)
        raise ArgumentError, "#{name.inspect} is not a collaborative rich text on #{self.class.name}"
      end

      state = LexxyRealtime.store.load(collaborative_document_key(name))
      return false if state.nil?

      doc = Y::Doc.new
      doc.apply_update(state)
      html = Y::Lexxy.new(doc).to_html
      return false if html.nil?

      public_send("#{name}=", html)
      save!
      true
    end
  end
end
