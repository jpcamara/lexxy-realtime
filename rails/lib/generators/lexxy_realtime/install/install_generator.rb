# frozen_string_literal: true

require "rails/generators"
require "generators/yrby/tables/tables_generator"

module LexxyRealtime
  module Generators
    # Adds the storage migration, using yrby's generator, and the
    # import-map pins. The channel ships in the gem as
    # LexxyRealtime::DocumentChannel, the way Turbo ships
    # Turbo::StreamsChannel.
    class InstallGenerator < Rails::Generators::Base
      # The gem's channel needs Action Cable. Stopping here is clearer than
      # an error on the first subscription.
      def check_action_cable
        return if defined?(ActionCable)

        say "Action Cable is not loaded (rails new --skip-action-cable?). " \
            'Add `require "action_cable/engine"` to config/application.rb, ' \
            "create config/cable.yml, and re-run this generator.", :red
        raise Thor::Error, "lexxy_realtime:install requires Action Cable"
      end

      # yrby's generator writes the migration for its document models.
      def create_tables
        invoke "yrby:tables"
      end

      # Import-map apps get pins to the assets this gem ships. Each shared
      # module has one pin, so the page loads one copy of it:
      #
      # - @37signals/lexxy aliases the app's own Lexxy asset (same file as
      #   the "lexxy" pin; one URL, one module), so lexxy-realtime shares
      #   the editor's embedded lexical.
      # - yrby-client and yrby-client/element point at one file, so
      #   lexxy-realtime and the app share one <yrby-document> class and
      #   one session store.
      # - yjs is one copy, because Yjs checks constructors with instanceof.
      # - @rails/actioncable is Rails' own file. <yrby-document> loads it
      #   for its default consumer.
      #
      # A pin the app already has is left alone, so re-running the
      # generator adds only what is missing.
      IMPORTMAP_PINS = {
        "@37signals/lexxy" => "lexxy.js",
        "lexxy-realtime" => "lexxy_realtime/lexxy-realtime.js",
        "yrby-client" => "lexxy_realtime/yrby-client.js",
        "yrby-client/element" => "lexxy_realtime/yrby-client.js",
        "yjs" => "lexxy_realtime/yjs.js",
        "@rails/actioncable" => "actioncable.esm.js",
        "@rails/activestorage" => "activestorage.esm.js"
      }.freeze

      def add_importmap_pins
        importmap = File.join(destination_root, "config/importmap.rb")
        return unless File.exist?(importmap)

        existing = File.read(importmap)
        missing = IMPORTMAP_PINS.reject { |name, _| existing.match?(/^\s*pin\s+["']#{Regexp.escape(name)}["']/) }
        return if missing.empty?

        pins = missing.map { |name, path| %(pin "#{name}", to: "#{path}") }
        append_to_file "config/importmap.rb", <<~RUBY

          # lexxy-realtime. One pin per shared module, so the page loads one
          # copy of each.
          #{pins.join("\n")}
        RUBY
      end

      def show_next_steps
        say <<~NEXT

          lexxy-realtime is installed. Lexxy itself (the gem and its editor
          JS) must already be installed and working. Next steps:

            1. bin/rails db:migrate
            2. Wire up the JavaScript. With import maps, the generator
               added pins; import "@37signals/lexxy" and "lexxy-realtime"
               from your entrypoint. With a bundler, install the
               lexxy-realtime npm package and import it.
            3. Declare `has_collaborative_rich_text :body` on a model and
               render it with `<%= form.collaborative_rich_textarea :body %>`.
               Render it only for users who may edit the record. The
               browser connects with the signed grant the helper renders.

          Optional: set cursor names with `LexxyRealtime.identity`.
        NEXT
      end
    end
  end
end
