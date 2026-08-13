require_relative "boot"

# Load only the frameworks we need -- no ActiveRecord.
require "rails"
require "action_controller/railtie"
require "action_cable/engine"
# Real uploads for the browser e2e: ActiveStorage's direct-upload endpoint
# and blob serving, with ActionText loaded so a Blob answers attachable_sgid
# (what the editor stamps on an uploaded attachment).
require "active_record/railtie"
require "active_storage/engine"
require "action_text/engine"
# Loaded explicitly (this app skips Bundler.require): provides the AnyCable
# connection factory when the harness boots the RPC server.
require "anycable-rails"

require "y"
require "y/action_cable" # Y::ActionCable::Sync (companion gem)
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

    # Uploads land on the disk service under data/ (wiped per test run).
    config.active_storage.service = :local
    config.active_storage.analyzers = []
    config.active_storage.variant_processor = :disabled
    config.action_controller.default_protect_from_forgery = false

    # A fresh database every run: create the ActiveStorage tables at boot.
    config.after_initialize do
      # The static test page has no CSRF meta tag; the direct-upload POST
      # enforces forgery protection on its own, so drop it here.
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
      # Server-side CRDT state for assertions: the durable, merged state for a
      # document key, base64-encoded (or null if nothing has been recorded).
      get "/content/:id", to: "content#show", constraints: { id: /[^\/]+/ }
      # Clear a document's durable log (test isolation).
      post "/reset/:id", to: "content#reset", constraints: { id: /[^\/]+/ }
      get "/up", to: proc { [200, {}, ["ok"]] }
    end
  end
end
