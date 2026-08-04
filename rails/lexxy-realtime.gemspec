# frozen_string_literal: true

require_relative "lib/lexxy_realtime/version"

Gem::Specification.new do |spec|
  spec.name = "lexxy-realtime"
  spec.version = LexxyRealtime::VERSION
  spec.authors = ["JP Camara"]
  spec.email = ["jp@jpcamara.com"]

  spec.summary = "Collaborative editing for Lexxy in Rails"
  spec.description = "Real-time collaborative editing for Lexxy (Action Text) in Rails: " \
                     "a model macro, a form helper, an install generator, and server-side " \
                     "rendering of the collaborative document back into Action Text, " \
                     "backed by yrby (Yjs CRDTs in Ruby)."
  spec.homepage = "https://github.com/jpcamara/lexxy-realtime"
  spec.license = "MIT"
  spec.required_ruby_version = ">= 3.4"

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = spec.homepage
  spec.metadata["changelog_uri"] = "#{spec.homepage}/releases"
  spec.metadata["rubygems_mfa_required"] = "true"

  # Anchored to the gemspec's directory: `gem build rails/lexxy-realtime.gemspec`
  # from the repo root otherwise globs nothing and ships an empty gem.
  spec.files = Dir.chdir(__dir__) { Dir["lib/**/*", "LICENSE", "README.md"] }
  spec.require_paths = ["lib"]

  spec.add_dependency "lexxy", ">= 0.9"
  spec.add_dependency "rails", ">= 7.1"
  spec.add_dependency "yrby", ">= 0.6.0"
  # yrby-rails (formerly yrby-actioncable): the sync channel and the
  # Y::Document / Y::DocumentUpdate models.
  # 0.5 ships Y::EncryptedDocument, which encrypted: attributes wire in.
  spec.add_dependency "yrby-rails", ">= 0.5"
end
