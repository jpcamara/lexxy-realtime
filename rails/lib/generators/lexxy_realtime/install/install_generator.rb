# frozen_string_literal: true

require "rails/generators"
require "rails/generators/active_record"

module LexxyRealtime
  module Generators
    # `bin/rails generate lexxy_realtime:install`: the document channel, the
    # update-log migration (the model ships in the gem), and the JS import.
    class InstallGenerator < Rails::Generators::Base
      include ActiveRecord::Generators::Migration

      source_root File.expand_path("templates", __dir__)

      # Apps generated with certain rails-new skips lack the Action Cable
      # boilerplate the channel inherits from; add whichever files are missing.
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

      # The models (LexxyRealtime::Document and Update) ship in the gem, like
      # ActionText::RichText — only their tables are created here.
      def create_migration_file
        migration_template "create_lexxy_realtime_tables.rb",
                           File.join(db_migrate_path, "create_lexxy_realtime_tables.rb")
      end

      def add_javascript_import
        entrypoint = Pathname(destination_root).join("app/javascript/application.js")
        if !entrypoint.exist?
          say 'Add `import "lexxy-realtime"` to your JavaScript entrypoint (app/javascript/application.js not found).'
        elsif !entrypoint.read.include?('import "lexxy-realtime"') # idempotent on re-run
          append_to_file "app/javascript/application.js", %(import "lexxy-realtime"\n)
        end
      end

      def show_next_steps
        say <<~NEXT

          lexxy-realtime is wired up:

            1. bin/rails db:migrate
            2. Install the lexxy-realtime npm package (npm/yarn/bun/pnpm)
            3. Declare `has_collaborative_rich_text :body` on a model and
               render it with `<%= form.collaborative_rich_textarea :body %>`.

          Optional: tighten `authorized?` in app/channels/document_channel.rb;
          set cursor names with `LexxyRealtime.identity`.
        NEXT
      end

      private

      def migration_version
        "[#{ActiveRecord::VERSION::MAJOR}.#{ActiveRecord::VERSION::MINOR}]"
      end
    end
  end
end
