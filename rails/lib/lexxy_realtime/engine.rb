# frozen_string_literal: true

# These are dependencies of this gem, not of the app's Gemfile, so Bundler
# doesn't auto-require them. lexxy brings the editor helpers/assets;
# y/action_cable brings Y::ActionCable::Sync and the Y::Doc/Y::Lexxy runtime
# the generated channel and the materializer use. Required here rather than in
# lexxy_realtime.rb because Lexxy's engine assumes Rails is loaded.
require "lexxy"
require "y"
require "y/action_cable"

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
