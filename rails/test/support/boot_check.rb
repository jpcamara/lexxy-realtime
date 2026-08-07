# frozen_string_literal: true

# Booted by engine_boot_test.rb to check the engine initializers, eager
# loading, Action Text macro, and FormBuilder integration. Prints
# ENGINE BOOT OK after all checks pass.
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
  # No asset pipeline in this boot; give Lexxy's assets initializer a target.
  config.assets = ActiveSupport::OrderedOptions.new
  config.assets.paths = []
  config.assets.precompile = []
end

Rails.application.initialize!

abort "LexxyRealtime::Engine not loaded" unless defined?(LexxyRealtime::Engine)
abort "macro missing on ActiveRecord::Base" unless ActiveRecord::Base.respond_to?(:has_collaborative_rich_text)
unless ActionView::Helpers::FormBuilder.method_defined?(:collaborative_rich_textarea)
  abort "FormBuilder method not prepended"
end
abort "yrby engine model not autoloaded" unless Y::DocumentUpdate.table_name == "y_document_updates"
abort "yrby document model not autoloaded" unless Y::Document.table_name == "y_documents"

# The real Action Text path: the macro must create the rich_text association.
ActiveRecord::Schema.verbose = false
ActiveRecord::Schema.define { create_table(:boot_posts) { |t| t.string :title } }

class BootPost < ActiveRecord::Base
  has_collaborative_rich_text :body
  has_collaborative_rich_text :notes, encrypted: true
end

abort "rich_text association missing" unless BootPost.reflect_on_association(:rich_text_body)
abort "document association missing" unless BootPost.reflect_on_association(:collaborative_document_body)
if BootPost.reflect_on_association(:rich_text_notes).klass != ActionText::EncryptedRichText
  abort "encrypted: did not reach Action Text"
end
if BootPost.reflect_on_association(:collaborative_document_notes).klass != Y::EncryptedDocument
  abort "encrypted: did not reach the document association"
end
abort "instance API missing on declaring model" unless BootPost.method_defined?(:find_or_create_collaborative_document)
if ActiveRecord::Base.method_defined?(:find_or_create_collaborative_document)
  abort "instance API leaked to plain models"
end

puts "ENGINE BOOT OK"
