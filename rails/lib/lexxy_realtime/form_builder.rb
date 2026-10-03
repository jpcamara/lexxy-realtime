# frozen_string_literal: true

module LexxyRealtime
  # Renders a Lexxy editor with collaboration configured for the record
  # and field. LexxyRealtime.identity supplies the cursor name and color.
  #
  # The element subscribes with the record's signed grant for this field,
  # the same token yrby-rails' collaborative_document_tag renders. Pass
  # expires_in: to limit how long it lasts; without it, GlobalID's default
  # of one month applies. An editor whose grant expires reconnects only
  # after the page reloads.
  module FormBuilder
    def collaborative_rich_textarea(method, name: nil, color: nil, expires_in: nil, **options)
      record = object
      unless record.respond_to?(:collaborative_rich_text?) && record.collaborative_rich_text?(method)
        raise ArgumentError,
              "#{record.class.name}##{method} is not collaborative (declare has_collaborative_rich_text :#{method})"
      end
      raise ArgumentError, "#{record.class.name} must be persisted to collaborate on it" unless record.persisted?

      identity = LexxyRealtime.identity.call(@template)
      collaborator = name || identity[:name]
      public_send(lexxy_editor_method, method, options) do
        # The client-side Yjs binding key, shared by peers of this
        # attribute. The server never sees it.
        @template.content_tag("lexxy-collaboration", "",
                              "doc-id" => "#{record.model_name.param_key}-#{record.id}-#{method}",
                              "name" => collaborator,
                              "color" => color || identity[:color] || LexxyRealtime.collaborator_color(collaborator),
                              "channel-name" => LexxyRealtime.channel_name,
                              "channel-params" => {
                                grant: record.collaborative_sgid(method, **{ expires_in: expires_in }.compact),
                                name: method
                              }.to_json)
      end
    end

    alias collaborative_rich_text_area collaborative_rich_textarea

    private

    # Lexxy's explicit helper exists on Rails 8.0/8.1. On the
    # ActionText::Editor adapter path in newer Rails, the standard
    # rich_text_area renders Lexxy and accepts the block.
    def lexxy_editor_method
      respond_to?(:lexxy_rich_textarea) ? :lexxy_rich_textarea : :rich_text_area
    end
  end
end
