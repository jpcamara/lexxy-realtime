require_relative "boot"

# Load only the frameworks we need -- no ActiveRecord.
require "rails"
require "action_controller/railtie"
require "action_cable/engine"

require "yrb_lite"
require "yrb_lite/action_cable" # YrbLite::ActionCable::Sync (companion gem)
require_relative "../lib/file_store"

module TestServer
  class Application < Rails::Application
    config.load_defaults 8.0
    config.eager_load = false
    config.secret_key_base = "lexxy-realtime-test-secret"

    # This is a local test harness: accept any origin and skip CSRF on the
    # cable connection so headless clients and the browser e2e can connect.
    config.action_cable.disable_request_forgery_protection = true
    config.action_cable.allowed_request_origins = [/.*/]

    # Serve the built browser test page out of public/.
    config.public_file_server.enabled = true

    config.logger = Logger.new($stdout)
    config.log_level = ENV.fetch("LOG_LEVEL", "warn").to_sym

    routes.append do
      # Server-side CRDT state for assertions: the durable, merged state for a
      # document key, base64-encoded (or null if nothing has been recorded).
      get "/content/:id", to: "content#show", constraints: { id: /[^\/]+/ }
      # Clear a document's durable log (test isolation).
      post "/reset/:id", to: "content#reset", constraints: { id: /[^\/]+/ }
      get "/up", to: proc { [200, {}, ["ok"]] }
    end
  end
end
