# frozen_string_literal: true

module LexxyRealtime
  # `form.collaborative_rich_textarea :body` — the FormBuilder spelling, the
  # way Action Text gives `form.rich_textarea` and Lexxy gives
  # `form.lexxy_rich_textarea`. Prepended onto ActionView's FormBuilder by the
  # engine; delegates to the collaborative_rich_text_area view helper.
  module FormBuilder
    def collaborative_rich_textarea(method, **)
      @template.collaborative_rich_text_area(self, method, **)
    end

    alias collaborative_rich_text_area collaborative_rich_textarea
  end
end
