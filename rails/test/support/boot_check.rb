# frozen_string_literal: true

# engine_boot_test.rb runs this script to check the engine initializers,
# eager loading, the Action Text macro, and the FormBuilder methods. It
# prints ENGINE BOOT OK when every check passes.
ENV["DATABASE_URL"] = "sqlite3::memory:"

require "rails"
require "active_record/railtie"
require "active_job/railtie"
require "action_controller/railtie"
require "action_view/railtie"
require "action_cable/engine"
require "active_storage/engine"
require "action_text/engine"
require "lexxy_realtime"

require "tmpdir"

class BootCheckApp < Rails::Application
  config.load_defaults Rails::VERSION::STRING.to_f
  config.eager_load = true
  config.logger = Logger.new(File::NULL)
  config.secret_key_base = "boot-check"
  config.active_storage.service_configurations = { "test" => { "service" => "Disk", "root" => Dir.mktmpdir } }
  config.active_storage.service = :test
  # This app has no asset pipeline, but Lexxy's assets initializer expects
  # config.assets to exist.
  config.assets = ActiveSupport::OrderedOptions.new
  config.assets.paths = []
  config.assets.precompile = []
end

Rails.application.initialize!

abort "LexxyRealtime::Engine not loaded" unless defined?(LexxyRealtime::Engine)
abort "macro missing on ActiveRecord::Base" unless ActiveRecord::Base.respond_to?(:has_collaborative_rich_text)
unless ActionView::Helpers::FormBuilder.method_defined?(:collaborative_rich_textarea)
  abort "FormBuilder is missing collaborative_rich_textarea"
end
abort "yrby engine did not autoload Y::DocumentUpdate" unless Y::DocumentUpdate.table_name == "y_document_updates"
abort "yrby engine did not autoload Y::Document" unless Y::Document.table_name == "y_documents"

# Declare a model so the checks below go through real Action Text.
ActiveRecord::Schema.verbose = false
ActiveRecord::Schema.define { create_table(:boot_posts) { |t| t.string :title } }

class BootPost < ActiveRecord::Base
  has_collaborative_rich_text :body
  has_collaborative_rich_text :notes, encrypted: true
end

abort "rich_text_body association missing" unless BootPost.reflect_on_association(:rich_text_body)
abort "collaborative_document missing" unless BootPost.method_defined?(:collaborative_document)
if BootPost.reflect_on_association(:rich_text_notes).klass != ActionText::EncryptedRichText
  abort "encrypted: true did not make Action Text use EncryptedRichText"
end
abort "encrypted: true did not reach yrby" if BootPost.collaborative_document_class(:notes) != Y::EncryptedDocument
abort "declaring model lacks the instance API" unless BootPost.method_defined?(:refresh_collaborative_rich_text)
abort "plain models have the instance API" if ActiveRecord::Base.method_defined?(:refresh_collaborative_rich_text)
abort "channel is not a Y::DocumentChannel" unless LexxyRealtime::DocumentChannel < Y::DocumentChannel

puts "ENGINE BOOT OK"
