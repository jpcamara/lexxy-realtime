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
    # Serialized per record (with_lock) so concurrent jobs can't overwrite a
    # newer materialization with an older one: the state is loaded inside the
    # lock, so the last writer always rendered the newest state it could see.
    def materialize_collaborative_rich_text!(name)
      unless collaborative_rich_text?(name)
        raise ArgumentError, "#{name.inspect} is not a collaborative rich text on #{self.class.name}"
      end

      with_lock do
        state = LexxyRealtime.store.load(collaborative_document_key(name))
        break false if state.nil?

        doc = Y::Doc.new
        doc.apply_update(state)
        html = Y::Lexxy.new(doc).to_html
        break false if html.nil?

        # A record can carry a pre-existing Action Text body from before
        # collaboration, and the collaborative document starts empty (there is
        # no server-side seeding yet — the doc is read-only from Ruby). Never
        # replace present content with a render that contains none: the empty
        # bootstrap of a just-opened editor must not destroy the stored body.
        break false if blank_rendered_html?(html) && public_send(name).present?

        public_send("#{name}=", html)
        save!
        true
      end
    end

    private

    def blank_rendered_html?(html)
      html.gsub(/<[^>]*>/, "").gsub(/\s|&nbsp;/, "").empty?
    end
  end
end
