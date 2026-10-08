# frozen_string_literal: true

require "test_helper"
require "action_view"
require_relative "fixtures/yjs_fixtures"

# Runs every ```ruby block in both READMEs against the gem, so an example
# that doesn't match the API fails the suite. Each block runs in its own
# anonymous module. The prelude defines names the examples use without
# declaring them, such as key and note.
class ReadmeExamplesTest < Minitest::Test
  ROOT = File.expand_path("../..", __dir__)

  # Configuration fragments that can't run on their own.
  SKIP = [
    /\A# Gemfile/,
    %r{\A# config/importmap\.rb},
    # The initializer example calls Rails.application.config.to_prepare,
    # which needs a booted app. document_channel_test covers
    # authorize_document.
    %r{\A# config/initializers/}
  ].freeze

  PRELUDE = <<~RUBY
    ApplicationRecord = Class.new(ActiveRecord::Base) do
      self.abstract_class = true
      include LexxyRealtime::Collaborative
    end
    module ApplicationCable
      class Channel
        def self.identifier = nil
      end
    end
    key = "readme-example-\#{name}"
    Y::Document.append(key, YjsFixtures::TwoDocsMerged::DOC1_UPDATE)
    note = Struct.new(:content).new
    view = Object.new
  RUBY

  def setup
    Y::DocumentUpdate.delete_all
    Y::Document.delete_all
    @identity_before = LexxyRealtime.identity
  end

  def teardown
    LexxyRealtime.identity = @identity_before
    # Reset configuration an example may have changed.
    LexxyRealtime.channel_name = nil
  end

  def ruby_blocks(path)
    File.read(path).scan(/^```ruby\n(.*?)^```/m).map(&:first)
  end

  def run_blocks(path)
    executed = 0
    ruby_blocks(path).each_with_index do |block, i|
      next if SKIP.any? { |pattern| block.match?(pattern) }

      executed += 1

      body = block
      # Wrap a bare macro line in a model class so it can run.
      if body.match?(/\A\s*has_collaborative_rich_text/)
        body = "Class.new(ApplicationRecord) do\n  self.table_name = \"posts\"\n#{body}end\n"
      end
      container = Module.new
      container.module_eval(PRELUDE + body, "#{path}:example_#{i + 1}")
    rescue Exception => e # rubocop:disable Lint/RescueException -- report which example failed
      flunk "#{File.basename(path)} example #{i + 1} raised #{e.class}: #{e.message}\n#{block}"
    end

    assert_operator executed, :>=, 1, "found no runnable examples in #{path}, so block extraction is broken"
  end

  def test_root_readme_ruby_examples
    run_blocks(File.join(ROOT, "README.md"))
  end

  def test_rails_readme_ruby_examples
    run_blocks(File.join(ROOT, "rails", "README.md"))
  end

  # Every form.method call in the ERB examples must exist on Rails'
  # FormBuilder or on LexxyRealtime::FormBuilder.
  def test_erb_examples_call_real_form_builder_methods
    calls = []
    [File.join(ROOT, "README.md"), File.join(ROOT, "rails", "README.md")].each do |path|
      File.read(path).scan(/^```erb\n(.*?)^```/m).flatten.each do |block|
        calls.concat(block.scan(/form\.(\w+)/).flatten)
      end
    end
    calls.uniq!

    assert_operator calls.length, :>=, 1, "no form builder calls found in erb examples"
    calls.each do |method_name|
      next if ActionView::Helpers::FormBuilder.method_defined?(method_name)

      assert LexxyRealtime::FormBuilder.method_defined?(method_name),
             "erb examples call form.#{method_name}, which no form builder defines"
    end
  end
end
