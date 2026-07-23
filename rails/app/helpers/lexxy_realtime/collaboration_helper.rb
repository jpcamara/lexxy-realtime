# frozen_string_literal: true

module LexxyRealtime
  module CollaborationHelper
    # The view-helper spelling behind form.collaborative_rich_textarea:
    # renders the Lexxy editor with a wired <lexxy-collaboration> child. The
    # record travels as a purpose-scoped signed GlobalID; identity comes from
    # LexxyRealtime.identity (current_user by default).
    def collaborative_rich_text_area(form, method, name: nil, color: nil, **options)
      record = form.object
      unless record.respond_to?(:collaborative_rich_text?) && record.collaborative_rich_text?(method)
        raise ArgumentError,
              "#{record.class.name}##{method} is not collaborative (declare has_collaborative_rich_text :#{method})"
      end
      raise ArgumentError, "#{record.class.name} must be persisted to collaborate on it" unless record.persisted?

      identity = LexxyRealtime.identity.call(self)
      collaborator = name || identity[:name]
      form.lexxy_rich_textarea(method, options) do
        content_tag("lexxy-collaboration", "",
                    "doc-id" => record.collaborative_document_key(method),
                    "name" => collaborator,
                    "color" => color || identity[:color] || collaborator_color_for(collaborator),
                    "channel-name" => LexxyRealtime::CHANNEL_NAME,
                    "channel-params" => { sgid: record.to_sgid(for: LexxyRealtime::SGID_PURPOSE).to_s,
                                          field: method }.to_json)
      end
    end

    # A stable, readable cursor color per collaborator name.
    def collaborator_color_for(name)
      "hsl(#{name.to_s.each_byte.reduce(0) { |acc, b| ((acc * 31) + b) % 360 }}, 70%, 45%)"
    end
  end
end
