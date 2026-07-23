# frozen_string_literal: true

# Lexxy and the yrby runtime are this gem's dependencies, not the app's, so
# Bundler doesn't auto-require them; Lexxy's engine assumes Rails is loaded.
require "lexxy"
require "y"
require "y/action_cable"

module LexxyRealtime
  class Engine < ::Rails::Engine
    # The macro on every model, the way Action Text does it.
    initializer "lexxy_realtime.active_record" do
      ActiveSupport.on_load(:active_record) { include LexxyRealtime::Collaborative }
    end

    # form.collaborative_rich_textarea, the way Lexxy wires its own.
    initializer "lexxy_realtime.form_builder" do |app|
      app.config.to_prepare { ActionView::Helpers::FormBuilder.prepend(LexxyRealtime::FormBuilder) }
    end
  end
end
