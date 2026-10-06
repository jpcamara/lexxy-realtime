# frozen_string_literal: true

module LexxyRealtime
  # Renders a Lexxy editor with collaboration configured for the record
  # and field. LexxyRealtime.identity supplies the cursor name and color.
  #
  # The editor is wrapped in a <yrby-document> element that subscribes to
  # LexxyRealtime.channel_name with a signed grant for this record and
  # field. Pass expires_in: to limit how long the grant lasts. Without it,
  # GlobalID's default of one month applies.
  #
  # Action Cable resubscribes with the grant after every dropped
  # connection, and the server rejects an expired grant. Pass refresh: with
  # the URL of an action in your app that returns a new grant as
  # { grant: record.collaborative_rich_text_grant(:body) }. When the server
  # rejects the subscription, the element fetches that URL and resubscribes
  # with the new grant, keeping the document and any edits the server
  # hasn't acknowledged. Without refresh:, the editor stops syncing until
  # the page reloads.
  module FormBuilder
    # Each keyword sets one attribute of the rendered elements.
    def collaborative_rich_textarea(method, name: nil, color: nil, expires_in: nil, refresh: nil, **options) # rubocop:disable Metrics/ParameterLists
      record = object
      unless record.respond_to?(:collaborative_rich_text?) && record.collaborative_rich_text?(method)
        raise ArgumentError,
              "#{record.class.name}##{method} is not collaborative (declare has_collaborative_rich_text :#{method})"
      end
      raise ArgumentError, "#{record.class.name} must be persisted to collaborate on it" unless record.persisted?

      editor = public_send(lexxy_editor_method, method, options) do
        collaboration_element(record, method, name, color)
      end

      document = {
        "grant" => record.collaborative_rich_text_grant(method, expires_in: expires_in),
        "name" => method,
        "channel" => LexxyRealtime.channel_name
      }
      document["refresh"] = refresh if refresh
      @template.content_tag("yrby-document", editor, document)
    end

    alias collaborative_rich_text_area collaborative_rich_textarea

    private

    def collaboration_element(record, method, name, color)
      identity = LexxyRealtime.identity.call(@template)
      collaborator = name || identity[:name]
      # doc-id is the client-side Yjs binding key, shared by peers of this
      # attribute. The server never sees it.
      @template.content_tag("lexxy-collaboration", "",
                            "doc-id" => "#{record.model_name.param_key}-#{record.id}-#{method}",
                            "name" => collaborator,
                            "color" => color || identity[:color] || LexxyRealtime.collaborator_color(collaborator))
    end

    # Lexxy's explicit helper exists on Rails 8.0/8.1. On the
    # ActionText::Editor adapter path in newer Rails, the standard
    # rich_text_area renders Lexxy and accepts the block.
    def lexxy_editor_method
      respond_to?(:lexxy_rich_textarea) ? :lexxy_rich_textarea : :rich_text_area
    end
  end
end
