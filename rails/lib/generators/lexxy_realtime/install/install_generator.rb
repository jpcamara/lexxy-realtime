# frozen_string_literal: true

require "json"
require "rails/generators"
require "generators/yrby/tables/tables_generator"

module LexxyRealtime
  module Generators
    # `bin/rails generate lexxy_realtime:install`: the document channel, the
    # storage migration (the models ship in the yrby-rails gem), and the JS
    # import.
    class InstallGenerator < Rails::Generators::Base
      source_root File.expand_path("templates", __dir__)

      # An app generated with --skip-action-cable has no ActionCable to
      # inherit from and no /cable endpoint; the generated files would
      # NameError at boot. Stop with instructions instead.
      def check_action_cable
        return if defined?(ActionCable)

        say "Action Cable is not loaded (rails new --skip-action-cable?). " \
            'Add `require "action_cable/engine"` to config/application.rb, ' \
            "create config/cable.yml, and re-run this generator.", :red
        raise Thor::Error, "lexxy_realtime:install requires Action Cable"
      end

      # Apps generated without the channel boilerplate lack the base classes
      # the channel inherits from; add whichever files are missing.
      def create_application_cable
        %w[connection channel].each do |file|
          destination = "app/channels/application_cable/#{file}.rb"
          next if File.exist?(File.join(destination_root, destination))

          template "application_cable_#{file}.rb", destination
        end
      end

      def create_channel
        template "document_channel.rb", "app/channels/document_channel.rb"
      end

      # Storage is yrby's (Y::Document + Y::DocumentUpdate, engine-owned);
      # its generator owns the migration.
      def create_tables
        invoke "yrby:tables"
      end

      def add_javascript_import
        root = Pathname(destination_root)
        if root.join("config/importmap.rb").exist? && !bundler_backed?(root)
          # Importmap can't pin this package yet, so warn instead of adding
          # an import that won't resolve.
          say "Importmap-only app detected: lexxy-realtime requires a JS bundler " \
              "(esbuild/vite/webpack); its lexical/yjs dependencies aren't pinnable yet. " \
              "Skipping the JS import.", :yellow
          return
        end

        entrypoint = root.join("app/javascript/application.js")
        if !entrypoint.exist?
          say 'Add `import "lexxy-realtime"` to your JavaScript entrypoint (app/javascript/application.js not found).'
        elsif !entrypoint.read.include?('import "lexxy-realtime"') # idempotent on re-run
          append_to_file "app/javascript/application.js", %(import "lexxy-realtime"\n)
        end
      end

      def show_next_steps
        say <<~NEXT

          lexxy-realtime is installed. Lexxy itself (the gem and its editor
          JS) must already be installed and working. Next steps:

            1. bin/rails db:migrate
            2. Install the lexxy-realtime npm package (npm/yarn/bun/pnpm)
            3. Declare `has_collaborative_rich_text :body` on a model and
               render it with `<%= form.collaborative_rich_textarea :body %>`.

          Optional: tighten `authorized?` in app/channels/document_channel.rb;
          set cursor names with `LexxyRealtime.identity`.
        NEXT
      end

      private

      # An importmap app often has a package.json for unrelated tooling
      # (PostCSS, tests). Only a build script is evidence the entrypoint is
      # actually bundled (the jsbundling-rails convention).
      def bundler_backed?(root)
        package = root.join("package.json")
        return false unless package.exist?

        JSON.parse(package.read).dig("scripts", "build").to_s.strip != ""
      rescue JSON::ParserError
        false
      end
    end
  end
end
