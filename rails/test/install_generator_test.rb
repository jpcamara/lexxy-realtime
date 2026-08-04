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

  def test_generates_channel_and_migration
    with_js_entrypoint
    run_generator

    assert_file "app/channels/document_channel.rb" do |channel|
      assert_match "include Y::ActionCable", channel
      assert_match "GlobalID::Locator.locate_signed", channel
      assert_match "LexxyRealtime.sgid_purpose(field)", channel,
                   "the token is scoped to the record and the field"
      assert_match "collaborative_rich_text?", channel, "the field must be a declared collaborative attribute"
      assert_match "collaborative_document!", channel
      assert_match "materialize_collaborative_rich_text!", channel,
                   "the channel renders write-through, named in place"
      assert_match "record.collaborative_document!(field).append", channel,
                   "storage routes through the record so encrypted attributes decrypt"
      assert_match "def authorized?\n    false", channel,
                   "the generated channel denies everyone until the app fills it in"
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

  def test_appends_the_javascript_import_idempotently
    with_js_entrypoint
    run_generator
    run_generator # a second run must not duplicate the import

    assert_file "app/javascript/application.js" do |entry|
      assert_equal 1, entry.scan('import "lexxy-realtime"').length
    end
  end

  def test_missing_entrypoint_does_not_fail
    run_generator # no app/javascript/application.js in the destination

    assert_file "app/channels/document_channel.rb"
    assert_no_file "app/javascript/application.js"
  end

  def test_importmap_only_app_gets_a_warning_not_a_broken_import
    with_js_entrypoint
    FileUtils.mkdir_p(File.join(destination_root, "config"))
    File.write(File.join(destination_root, "config/importmap.rb"), "pin \"application\"\n")

    run_generator

    assert_file "app/javascript/application.js" do |entry|
      refute_includes entry, "lexxy-realtime", "an unpinnable import would fail silently in the browser"
    end
  end

  def test_importmap_with_a_bundler_still_gets_the_import
    with_js_entrypoint
    FileUtils.mkdir_p(File.join(destination_root, "config"))
    File.write(File.join(destination_root, "config/importmap.rb"), "pin \"application\"\n")
    # A build script is the evidence the entrypoint is actually bundled.
    File.write(File.join(destination_root, "package.json"),
               '{ "scripts": { "build": "esbuild app/javascript/*.js" } }')

    run_generator

    assert_file "app/javascript/application.js" do |entry|
      assert_includes entry, 'import "lexxy-realtime"'
    end
  end

  def test_importmap_with_an_unrelated_package_json_skips_the_import
    with_js_entrypoint
    FileUtils.mkdir_p(File.join(destination_root, "config"))
    File.write(File.join(destination_root, "config/importmap.rb"), "pin \"application\"\n")
    # package.json without a build script (PostCSS, test tooling): the
    # entrypoint is importmapped, so a bare import would not resolve.
    File.write(File.join(destination_root, "package.json"), "{}\n")

    run_generator

    assert_file "app/javascript/application.js" do |entry|
      refute_includes entry, 'import "lexxy-realtime"'
    end
  end
end
