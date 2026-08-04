# frozen_string_literal: true

require "rails/engine"
require "action_dispatch" # Engine::Configuration references it at subclass definition

# This gem's dependencies, not the app's: Bundler doesn't auto-require
# them, and Lexxy's engine must register so its initializers run at boot.
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
  end
end
