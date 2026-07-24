# frozen_string_literal: true

require "rails/engine"
require "action_dispatch" # Engine::Configuration references it at subclass definition

# Lexxy and the yrby runtime are this gem's dependencies, not the app's, so
# Bundler doesn't auto-require them; Lexxy's engine registers here so its own
# initializers run at boot.
require "lexxy"
require "y"
require "yrby-rails" # the sync concern, Y::Document storage, and yrby's engine

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
