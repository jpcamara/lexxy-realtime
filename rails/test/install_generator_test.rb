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

  def test_generates_channel_and_migration
    run_generator

    assert_file "app/channels/document_channel.rb" do |channel|
      assert_match "include Y::ActionCable", channel
      assert_match "GlobalID::Locator.locate_signed", channel
      assert_match "LexxyRealtime.sgid_purpose(field)", channel,
                   "the token is scoped to the record and the field"
      assert_match "collaborative_rich_text?", channel, "the field must be a declared collaborative attribute"
      assert_match "collaborative_document!", channel
      assert_match "materialize_collaborative_rich_text!", channel,
                   "the channel materializes updates through the record API"
      assert_match "Y::Document.append", channel
      assert_match "def authorized?\n    false", channel,
                   "authorization defaults to false"
    end
    assert_no_file "app/models/yrby_document_store.rb"
    assert_no_file "app/models/yrby_document_update.rb"
    assert_file "app/channels/application_cable/channel.rb"
    assert_file "app/channels/application_cable/connection.rb"
    # Storage migration comes from yrby's tables generator.
    assert_migration "db/migrate/create_y_tables.rb" do |migration|
      assert_match ":y_documents", migration
      assert_match "t.references :record, polymorphic: true", migration
      assert_match ":y_document_updates", migration
    end
  end
end
