# frozen_string_literal: true

require "test_helper"
require "rails"
require "rails/generators"
require "rails/generators/test_case"
require "generators/lexxy_realtime/install/install_generator"

class InstallGeneratorTest < Rails::Generators::TestCase
  tests LexxyRealtime::Generators::InstallGenerator
  destination File.expand_path("../tmp/generator-destination", __dir__)
  setup :prepare_destination

  def with_js_entrypoint
    FileUtils.mkdir_p(File.join(destination_root, "app/javascript"))
    File.write(File.join(destination_root, "app/javascript/application.js"), "// entry\n")
  end

  def test_generates_channel_store_model_and_migration
    with_js_entrypoint
    run_generator

    assert_file "app/channels/document_channel.rb" do |channel|
      assert_match "include Y::ActionCable::Sync", channel
      assert_match "GlobalID::Locator.locate_signed", channel
      assert_match "LexxyRealtime.sgid_purpose", channel
      assert_match "collaborative_rich_text?", channel, "the field must be a declared collaborative attribute"
      assert_match "LexxyRealtime::MaterializeJob", channel
      assert_match "LexxyRealtime.store.append", channel
      assert_match "def authorized?", channel
    end
    assert_file "app/models/yrby_document_store.rb" do |store|
      assert_match "compacted_state_update", store
      assert_match "doc.pending?", store, "compaction must skip a document holding an open gap"
    end
    assert_file "app/models/yrby_document_update.rb"
    assert_migration "db/migrate/create_yrby_document_updates.rb" do |migration|
      assert_match "t.binary :payload", migration
      assert_match "document_key", migration
    end
  end

  def test_appends_the_javascript_import
    with_js_entrypoint
    run_generator

    assert_file "app/javascript/application.js" do |entry|
      assert_match 'import "lexxy-realtime"', entry
    end
  end

  def test_missing_entrypoint_does_not_fail
    run_generator # no app/javascript/application.js in the destination

    assert_file "app/channels/document_channel.rb"
    assert_no_file "app/javascript/application.js"
  end
end
