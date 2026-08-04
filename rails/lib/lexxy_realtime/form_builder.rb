# frozen_string_literal: true

module LexxyRealtime
  # `form.collaborative_rich_textarea :body` — the FormBuilder method, like
  # Action Text's `form.rich_textarea` and Lexxy's `form.lexxy_rich_textarea`.
  # Renders the Lexxy editor with a wired <lexxy-collaboration> child; the
  # record travels as a purpose-scoped signed GlobalID, and identity comes
  # from LexxyRealtime.identity (current_user by default).
  module FormBuilder
    def collaborative_rich_textarea(method, name: nil, color: nil, **options)
      record = object
      unless record.respond_to?(:collaborative_rich_text?) && record.collaborative_rich_text?(method)
        raise ArgumentError,
              "#{record.class.name}##{method} is not collaborative (declare has_collaborative_rich_text :#{method})"
      end
      raise ArgumentError, "#{record.class.name} must be persisted to collaborate on it" unless record.persisted?

      identity = LexxyRealtime.identity.call(@template)
      collaborator = name || identity[:name]
      lexxy_rich_textarea(method, options) do
        # The doc-id is the client-side Yjs binding key — peers of this
        # attribute must agree on it. The server never sees it; the storage
        # key comes from the signed GlobalID.
        @template.content_tag("lexxy-collaboration", "",
                              "doc-id" => "#{record.model_name.param_key}-#{record.id}-#{method}",
                              "name" => collaborator,
                              "color" => color || identity[:color] || LexxyRealtime.collaborator_color(collaborator),
                              "channel-name" => LexxyRealtime::CHANNEL_NAME,
                              "channel-params" => { sgid: record.to_sgid(for: LexxyRealtime.sgid_purpose(method)).to_s,
                                                    field: method }.to_json)
      end
    end

    alias collaborative_rich_text_area collaborative_rich_textarea
  end
end
