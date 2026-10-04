# frozen_string_literal: true

require "rails/generators"
require "generators/yrby/tables/tables_generator"

module LexxyRealtime
  module Generators
    # Installs the storage migration (via yrby's generator) and the
    # import-map pins. The channel ships in the gem
    # (LexxyRealtime::DocumentChannel), the way Turbo ships
    # Turbo::StreamsChannel — nothing else lands in the app.
    class InstallGenerator < Rails::Generators::Base
      # The gem's channel needs Action Cable at runtime; fail at install
      # time, not on the first subscribe.
      def check_action_cable
        return if defined?(ActionCable)

        say "Action Cable is not loaded (rails new --skip-action-cable?). " \
            'Add `require "action_cable/engine"` to config/application.rb, ' \
            "create config/cable.yml, and re-run this generator.", :red
        raise Thor::Error, "lexxy_realtime:install requires Action Cable"
      end

      # yrby owns the models and their migration.
      def create_tables
        invoke "yrby:tables"
      end

      # Import-map apps get pins to the assets this gem ships. The Lexxy
      # pin must point at this gem's build (Lexxy's own asset bundles a
      # second copy of lexical, which breaks collaboration), so an
      # existing @37signals/lexxy pin is left for the app to resolve.
      def add_importmap_pins
        return unless File.exist?(File.join(destination_root, "config/importmap.rb"))
        return if File.read(File.join(destination_root, "config/importmap.rb")).include?("lexxy_realtime/")

        append_to_file "config/importmap.rb", <<~RUBY

          # lexxy-realtime. @37signals/lexxy aliases the app's own Lexxy
          # asset (same file as the "lexxy" pin; one URL, one module), so
          # the bundle shares the editor's embedded lexical.
          pin "@37signals/lexxy", to: "lexxy.js"
          pin "lexxy-realtime", to: "lexxy_realtime/lexxy-realtime.js"
          pin "@rails/activestorage", to: "activestorage.esm.js"
        RUBY
      end

      def show_next_steps
        say <<~NEXT

          lexxy-realtime is installed. Lexxy itself (the gem and its editor
          JS) must already be installed and working. Next steps:

            1. bin/rails db:migrate
            2. Wire up the JavaScript. With import maps, the generator
               added pins; import "@37signals/lexxy" and "lexxy-realtime"
               from your entrypoint, and remove any pin for Lexxy's own
               asset. With a bundler, install the lexxy-realtime npm
               package and import it.
            3. Declare `has_collaborative_rich_text :body` on a model and
               render it with `<%= form.collaborative_rich_textarea :body %>`
               — only on pages already authorized to edit the record. The
               helper mints a signed, field-scoped token, and the gem's
               LexxyRealtime::DocumentChannel accepts nothing else.

          Optional: set cursor names with `LexxyRealtime.identity`.
        NEXT
      end
    end
  end
end
