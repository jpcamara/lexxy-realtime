require_relative "boot"

# Load only the frameworks the test server uses.
require "rails"
require "action_controller/railtie"
require "action_cable/engine"
# The uploads e2e uses Active Storage's direct upload endpoint and blob
# serving, which need Active Record. Action Text is loaded so a Blob responds
# to attachable_sgid, which the editor writes onto an uploaded attachment.
require "active_record/railtie"
require "active_storage/engine"
require "action_text/engine"
# This app doesn't call Bundler.require, so load anycable-rails here. The
# AnyCable RPC server needs its connection factory.
require "anycable-rails"

require "y"
require "y/action_cable" # Y::ActionCable::Sync, from yrby-rails
require_relative "../lib/file_store"

module TestServer
  class Application < Rails::Application
    config.load_defaults 8.0
    config.eager_load = false
    config.secret_key_base = "lexxy-realtime-test-secret"

    # This is a local test server. Accept any origin and skip forgery
    # protection on the cable connection so the headless and browser tests can
    # connect.
    config.action_cable.disable_request_forgery_protection = true
    config.action_cable.allowed_request_origins = [/.*/]

    # Serve the built browser test page out of public/.
    config.public_file_server.enabled = true

    # Uploads go to the disk service under data/, which test/run.mjs clears on
    # every run.
    config.active_storage.service = :local
    config.active_storage.analyzers = []
    config.active_storage.variant_processor = :disabled
    config.action_controller.default_protect_from_forgery = false

    # The database under data/ starts empty on every run, so create the
    # Active Storage tables at boot.
    config.after_initialize do
      # The static test page has no CSRF meta tag, and the direct upload
      # controller checks forgery protection itself, so turn it off here.
      ActiveStorage::DirectUploadsController.skip_forgery_protection

      ActiveRecord::Schema.verbose = false
      ActiveRecord::Schema.define do
        unless table_exists?(:active_storage_blobs)
          create_table :active_storage_blobs do |t|
            t.string :key, null: false
            t.string :filename, null: false
            t.string :content_type
            t.text :metadata
            t.string :service_name, null: false
            t.bigint :byte_size, null: false
            t.string :checksum
            t.datetime :created_at, null: false
            t.index [:key], unique: true
          end
          create_table :active_storage_attachments do |t|
            t.string :name, null: false
            t.string :record_type, null: false
            t.bigint :record_id, null: false
            t.bigint :blob_id, null: false
            t.datetime :created_at, null: false
            t.index [:blob_id]
            t.index [:record_type, :record_id, :name, :blob_id], name: "index_active_storage_attachments_uniqueness", unique: true
          end
          create_table :active_storage_variant_records do |t|
            t.bigint :blob_id, null: false
            t.string :variation_digest, null: false
            t.index [:blob_id, :variation_digest], unique: true
          end
        end
      end
    end

    config.logger = Logger.new($stdout)
    config.log_level = ENV.fetch("LOG_LEVEL", "warn").to_sym

    routes.append do
      # Returns a document's stored state as base64, or null if nothing has
      # been recorded. Tests use it in assertions.
      get "/content/:id", to: "content#show", constraints: { id: /[^\/]+/ }
      # Clears a document's log so each test starts empty.
      post "/reset/:id", to: "content#reset", constraints: { id: /[^\/]+/ }
      # A new grant for <yrby-document refresh=...>: returns the one in the URL.
      get "/grant/:grant", to: "grants#show", constraints: { grant: /[^\/]+/ }
      get "/up", to: proc { [200, {}, ["ok"]] }
    end
  end
end
