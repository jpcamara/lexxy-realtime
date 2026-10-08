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

  def test_generates_only_the_migration
    run_generator

    # The channel ships in the gem (LexxyRealtime::DocumentChannel);
    # install lands only the migration.
    assert_no_file "app/channels/document_channel.rb"
    assert_no_file "app/channels/application_cable/channel.rb"
    assert_no_file "app/channels/application_cable/connection.rb"
    assert_no_file "app/models/yrby_document_store.rb"
    assert_no_file "app/models/yrby_document_update.rb"
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
    write_importmap "pin \"application\"\n"

    run_generator

    assert_file "config/importmap.rb" do |importmap|
      assert_match 'pin "application"', importmap
      assert_match 'pin "@37signals/lexxy", to: "lexxy.js"', importmap
      assert_match 'pin "lexxy-realtime", to: "lexxy_realtime/lexxy-realtime.js"', importmap
      assert_match 'pin "yrby-client", to: "lexxy_realtime/yrby-client.js"', importmap
      assert_match 'pin "yrby-client/element", to: "lexxy_realtime/yrby-client.js"', importmap
      assert_match 'pin "yjs", to: "lexxy_realtime/yjs.js"', importmap
      assert_match 'pin "@rails/actioncable", to: "actioncable.esm.js"', importmap
      assert_match 'pin "@rails/activestorage", to: "activestorage.esm.js"', importmap
      refute_match "lexxy_realtime/lexical.js", importmap
      refute_match "lexxy_realtime/lexxy.js", importmap
    end
  end

  # Every pinned asset the generator points into the gem exists.
  def test_pinned_gem_assets_exist
    write_importmap ""

    run_generator

    gem_assets = File.expand_path("../app/assets/javascript", __dir__)
    importmap = File.read(File.join(destination_root, "config/importmap.rb"))
    pinned = importmap.scan(%r{to: "(lexxy_realtime/[^"]+)"}).flatten

    expected = %w[lexxy_realtime/lexxy-realtime.js lexxy_realtime/yjs.js lexxy_realtime/yrby-client.js]

    assert_equal expected, pinned.uniq.sort
    pinned.each { |path| assert_path_exists File.join(gem_assets, path) }
  end

  def test_pins_not_duplicated
    write_importmap "pin \"lexxy-realtime\", to: \"lexxy_realtime/lexxy-realtime.js\"\n"

    run_generator
    run_generator

    assert_file "config/importmap.rb" do |importmap|
      assert_equal 1, importmap.scan("lexxy_realtime/lexxy-realtime.js").length
      assert_equal 1, importmap.scan('pin "yjs"').length
      assert_equal 2, importmap.scan("lexxy_realtime/yrby-client.js").length
    end
  end

  # An app that already pins one of the shared modules keeps its own pin,
  # and the page still loads one copy of it.
  def test_existing_pin_kept
    write_importmap "pin \"yjs\", to: \"https://cdn.example/yjs.js\"\n"

    run_generator

    assert_file "config/importmap.rb" do |importmap|
      assert_equal 1, importmap.scan('pin "yjs"').length
      assert_match 'pin "yjs", to: "https://cdn.example/yjs.js"', importmap
      refute_match "lexxy_realtime/yjs.js", importmap
      assert_match 'pin "lexxy-realtime", to: "lexxy_realtime/lexxy-realtime.js"', importmap
    end
  end

  private

  def write_importmap(content)
    FileUtils.mkdir_p(File.join(destination_root, "config"))
    File.write(File.join(destination_root, "config/importmap.rb"), content)
  end
end
