# frozen_string_literal: true

module LexxyRealtime
  module CollaborationHelper
    # The collaborative counterpart of `form.lexxy_rich_textarea`: renders the
    # Lexxy editor for the attribute with a `<lexxy-collaboration>` element
    # inside it, wired to the record through a signed GlobalID. With the
    # lexxy-realtime JS package imported, that's the entire client setup.
    #
    #   <%= collaborative_rich_text_area form, :body %>
    #
    # The collaborator's name/color come from LexxyRealtime.identity (which
    # defaults to current_user); pass name:/color: to override per render.
    #
    # A record with an existing body works: the element seeds a brand-new
    # collaborative document from the editor's server-rendered value on first
    # open (see the JS package), so the stored content becomes the document.
    def collaborative_rich_text_area(form, method, name: nil, color: nil, **options)
      record = form.object
      unless record.respond_to?(:collaborative_rich_text?) && record.collaborative_rich_text?(method)
        raise ArgumentError,
              "#{record.class.name}##{method} is not collaborative. " \
              "Declare it with `has_collaborative_rich_text :#{method}`."
      end
      raise ArgumentError, "#{record.class.name} must be persisted to collaborate on it" unless record.persisted?

      identity = LexxyRealtime.resolve_identity(self)
      collaborator_name = name || identity[:name]
      collaborator_color = color || identity[:color] || collaborator_color_for(collaborator_name)

      form.lexxy_rich_textarea(method, options) do
        content_tag("lexxy-collaboration", "",
                    "doc-id" => record.collaborative_document_key(method),
                    "name" => collaborator_name,
                    "color" => collaborator_color,
                    "channel-name" => LexxyRealtime.channel_name,
                    "channel-params" => {
                      sgid: record.to_sgid(for: LexxyRealtime.sgid_purpose).to_s,
                      field: method
                    }.to_json)
      end
    end

    # A stable, readable cursor color derived from the collaborator's name, so
    # a user keeps the same color across sessions without storing one.
    def collaborator_color_for(name)
      hue = name.to_s.each_byte.reduce(0) { |acc, byte| ((acc * 31) + byte) % 360 }
      "hsl(#{hue}, 70%, 45%)"
    end
  end
end
