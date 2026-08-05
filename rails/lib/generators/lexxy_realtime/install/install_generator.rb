# frozen_string_literal: true

require "rails/generators"
require "generators/yrby/tables/tables_generator"

module LexxyRealtime
  module Generators
    # Installs the document channel, the storage migration (via yrby's
    # generator), and the Action Cable boilerplate when missing.
    class InstallGenerator < Rails::Generators::Base
      source_root File.expand_path("templates", __dir__)

      # rails new --skip-action-cable leaves nothing for the channel to
      # inherit from.
      def check_action_cable
        return if defined?(ActionCable)

        say "Action Cable is not loaded (rails new --skip-action-cable?). " \
            'Add `require "action_cable/engine"` to config/application.rb, ' \
            "create config/cable.yml, and re-run this generator.", :red
        raise Thor::Error, "lexxy_realtime:install requires Action Cable"
      end

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

      # yrby owns the models and their migration.
      def create_tables
        invoke "yrby:tables"
      end

      def show_next_steps
        say <<~NEXT

          lexxy-realtime is installed. Lexxy itself (the gem and its editor
          JS) must already be installed and working. Next steps:

            1. bin/rails db:migrate
            2. Install the lexxy-realtime npm package (npm/yarn/bun/pnpm)
               and add `import "lexxy-realtime"` to your JavaScript
               entrypoint. A JS bundler is required; importmap can't pin
               this package yet.
            3. Declare `has_collaborative_rich_text :body` on a model and
               render it with `<%= form.collaborative_rich_textarea :body %>`.
            4. Implement `authorized?` in app/channels/document_channel.rb.
               Everyone is denied until you do.

          Optional: set cursor names with `LexxyRealtime.identity`.
        NEXT
      end
    end
  end
end
