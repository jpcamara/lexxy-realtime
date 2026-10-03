# frozen_string_literal: true

require_relative "lib/lexxy_realtime/version"

Gem::Specification.new do |spec|
  spec.name = "lexxy-realtime"
  spec.version = LexxyRealtime::VERSION
  spec.authors = ["JP Camara"]
  spec.email = ["jp@jpcamara.com"]

  spec.summary = "Collaborative editing for Lexxy in Rails"
  spec.description = "Adds collaborative Lexxy editing to Rails applications using yrby. " \
                     "Includes the model, form, channel, generator, and Action Text integration."
  spec.homepage = "https://github.com/jpcamara/lexxy-realtime"
  spec.license = "MIT"
  spec.required_ruby_version = ">= 3.4"

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = spec.homepage
  spec.metadata["changelog_uri"] = "#{spec.homepage}/releases"
  spec.metadata["rubygems_mfa_required"] = "true"

  # Resolve file globs from the gem directory so builds work from the
  # repository root.
  spec.files = Dir.chdir(__dir__) { Dir["lib/**/*", "app/**/*", "LICENSE", "README.md"] }
  spec.require_paths = ["lib"]

  # 0.9.29 is the floor the editor JS is built against (attachments
  # construct bare, basecamp/lexxy#1196); the gem floor matches so an
  # import-map app riding the lexxy gem's own asset gets a compatible one.
  spec.add_dependency "lexxy", ">= 0.9.29"
  # lexxy 0.9 requires Rails >= 8.0.2.
  spec.add_dependency "rails", ">= 8.0.2"
  # yrby 0.8 is the core release yrby-rails 0.7 builds on.
  spec.add_dependency "yrby", "~> 0.8"
  # yrby-rails: the sync concern and the Y::Document models. 0.7 calls
  # authorized?(key), which the generated channel accepts.
  spec.add_dependency "yrby-rails", "~> 0.7"
end
