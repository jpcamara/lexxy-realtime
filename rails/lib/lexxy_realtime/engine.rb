# frozen_string_literal: true

# Lexxy is a dependency of this gem, not of the app's Gemfile, so Bundler
# doesn't auto-require it; load it (editor helpers, assets, its engine) with
# ours. Required here rather than in lexxy_realtime.rb because Lexxy's engine
# assumes Rails is loaded.
require "lexxy"

module LexxyRealtime
  class Engine < ::Rails::Engine
    # Make the macro available on every model, the way Action Text does.
    initializer "lexxy_realtime.active_record" do
      ActiveSupport.on_load(:active_record) do
        include LexxyRealtime::Collaborative
      end
    end
    # app/helpers and app/jobs load through the engine's autoload paths;
    # helpers are included into the host app's views automatically.
  end
end
