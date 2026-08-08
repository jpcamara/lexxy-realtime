# frozen_string_literal: true

require "rails/engine"
require "action_dispatch" # Engine::Configuration references it at subclass definition

# Require the engine dependencies explicitly so their initializers run
# during boot.
require "lexxy"
require "y"
require "yrby-rails" # the sync concern, Y::Document storage, and yrby's engine

module LexxyRealtime
  class Engine < ::Rails::Engine
    initializer "lexxy_realtime.active_record" do
      ActiveSupport.on_load(:active_record) { include LexxyRealtime::Collaborative }
    end

    initializer "lexxy_realtime.form_builder" do |app|
      app.config.to_prepare { ActionView::Helpers::FormBuilder.prepend(LexxyRealtime::FormBuilder) }
    end

    # The import-map assets (lexxy_realtime/lexical.js and friends).
    initializer "lexxy_realtime.assets" do |app|
      app.config.assets.paths << root.join("app/assets/javascript") if app.config.respond_to?(:assets)
    end
  end
end
