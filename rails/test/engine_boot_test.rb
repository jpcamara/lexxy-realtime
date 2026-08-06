# frozen_string_literal: true

require "test_helper"
require "open3"

# Boot a minimal Rails app in a subprocess to exercise the engine
# initializers, eager loading, Action Text macro, and FormBuilder
# integration.
class EngineBootTest < Minitest::Test
  def test_the_engine_boots_a_real_rails_application
    script = File.expand_path("support/boot_check.rb", __dir__)
    output, status = Open3.capture2e("bundle", "exec", "ruby", script, chdir: File.expand_path("..", __dir__))

    assert_predicate status, :success?, "engine boot failed:\n#{output}"
    assert_includes output, "ENGINE BOOT OK"
  end
end
