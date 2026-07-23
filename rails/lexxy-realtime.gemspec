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
                     "materialization of the collaborative document back into Action Text, " \
                     "backed by yrby (Yjs CRDTs in Ruby, no Node)."
  spec.homepage = "https://github.com/jpcamara/lexxy-realtime"
  spec.license = "MIT"
  spec.required_ruby_version = ">= 3.4"

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = spec.homepage
  spec.metadata["changelog_uri"] = "#{spec.homepage}/blob/main/CHANGELOG.md"
  spec.metadata["rubygems_mfa_required"] = "true"

  spec.files = Dir["lib/**/*", "app/**/*", "LICENSE", "README.md"]
  spec.require_paths = ["lib"]

  spec.add_dependency "lexxy"
  spec.add_dependency "rails", ">= 7.1"
  spec.add_dependency "yrby", ">= 0.6.0"
  # First release containing Y::UpdateLog and the include-Y::ActionCable
  # forwarding (jpcamara/yrby#52); 0.3.1 has neither.
  spec.add_dependency "yrby-actioncable", ">= 0.4"
end
