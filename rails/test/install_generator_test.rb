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
      assert_match "find_or_create_collaborative_document", channel
      assert_match "refresh_collaborative_rich_text", channel,
                   "the channel materializes updates through the record API"
      assert_match "record.find_or_create_collaborative_document(field).append", channel,
                   "storage routes through the record so encrypted attributes decrypt"
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

  def test_no_pins_without_importmap
    run_generator

    assert_no_file "config/importmap.rb"
  end

  def test_pins_appended_to_importmap
    FileUtils.mkdir_p(File.join(destination_root, "config"))
    File.write(File.join(destination_root, "config/importmap.rb"), "pin \"application\"\n")

    run_generator

    assert_file "config/importmap.rb" do |importmap|
      assert_match 'pin "application"', importmap
      assert_match 'pin "lexical", to: "lexxy_realtime/lexical.js"', importmap
      assert_match 'pin "@37signals/lexxy", to: "lexxy_realtime/lexxy.js"', importmap
      assert_match 'pin "lexxy-realtime", to: "lexxy_realtime/lexxy-realtime.js"', importmap
      assert_match 'pin "@rails/activestorage", to: "activestorage.esm.js"', importmap
    end
  end

  def test_pins_not_duplicated
    FileUtils.mkdir_p(File.join(destination_root, "config"))
    File.write(
      File.join(destination_root, "config/importmap.rb"),
      "pin \"lexxy-realtime\", to: \"lexxy_realtime/lexxy-realtime.js\"\n"
    )

    run_generator

    assert_file "config/importmap.rb" do |importmap|
      assert_equal 1, importmap.scan("lexxy_realtime/lexxy-realtime.js").length
    end
  end
end
