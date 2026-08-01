# frozen_string_literal: true

require "test_helper"

class PackagingTest < Minitest::Test
  def test_gemspec_files_do_not_depend_on_the_callers_working_directory
    spec = Dir.chdir("/") { Gem::Specification.load(File.expand_path("../lexxy-realtime.gemspec", __dir__)) }

    assert_includes spec.files, "lib/lexxy_realtime.rb"
    assert_includes spec.files, "app/jobs/lexxy_realtime/materialize_job.rb"
  end
end
