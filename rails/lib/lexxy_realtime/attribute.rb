# frozen_string_literal: true

require "y/collaborative"

module LexxyRealtime
  # The collaborative document for one rich-text field: what
  # record.collaborative_document(:body) returns for a field declared with
  # has_collaborative_rich_text. It's yrby-rails' document with this gem's
  # grant and channel, so the form helper, collaborative_document_tag, and
  # Y::Agent all subscribe where the field is rendered.
  class Attribute < Y::Collaborative::Attribute
    # The signed grant LexxyRealtime::DocumentChannel accepts. Pass
    # expires_in: to limit how long it lasts. Without it, GlobalID's default
    # of one month applies. GlobalID reads an explicit nil as "never
    # expires", so the option is only passed when it's given.
    def grant(expires_in: nil)
      options = { for: LexxyRealtime.grant_purpose(name) }
      options[:expires_in] = expires_in if expires_in
      record.to_sgid(**options).to_s
    end

    def channel = LexxyRealtime.channel_name

    # Reloads and renders the document while holding the record lock,
    # then saves the HTML through the attribute writer. Returns false
    # when the document has no state.
    def refresh
      record.with_lock do
        record.strict_loading!(false) if record.strict_loading? # the writer lazily loads the rich-text row
        state = load_state
        break false if state.nil?

        doc = Y::Doc.new
        doc.apply_update(state)
        renderer = Y::Lexxy.new(doc, nodes: record.collaborative_rich_text_rules.fetch(name.to_sym))
        html = renderer.to_html
        break false if html.nil?

        report_unknown_node_types(renderer)
        record.public_send("#{name}=", html)
        record.save!(validate: false) # collaboration updates should not run unrelated model validations
        true
      end
    end

    private

    # Editors in the browser show custom nodes that the server can't
    # render without a rule. Logs a warning once per class, field, and
    # set of types.
    def report_unknown_node_types(renderer)
      types = renderer.unknown_types.sort
      return if types.empty?

      model = record.class.name
      return unless LexxyRealtime.first_sighting_of_unknown_types?([model, name, types])

      Rails.logger&.warn(
        "#{model}##{name} contains Lexical node types with no Y::Lexxy render rule: " \
        "#{types.join(', ')}. The stored HTML drops their markup, and a decorator node renders " \
        "nothing. Add rules with has_collaborative_rich_text :#{name}, nodes: { ... }."
      )
    end
  end
end
