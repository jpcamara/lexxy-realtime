# frozen_string_literal: true

require "rails/generators"
require "rails/generators/active_record"

module LexxyRealtime
  module Generators
    # `bin/rails generate lexxy_realtime:install`
    #
    # Wires a Rails app for collaborative Lexxy editing: the document channel
    # (signed-GlobalID join, store-backed sync, materialization), the
    # ActiveRecord-backed update store with compaction, its migration, and the
    # one-line JavaScript import. The generated files are plain app code.
    class InstallGenerator < Rails::Generators::Base
      include ActiveRecord::Generators::Migration

      source_root File.expand_path("templates", __dir__)

      def create_application_cable
        # Apps generated with certain rails-new skips have no Action Cable
        # boilerplate; the channel below inherits from it.
        return if File.exist?(File.join(destination_root, "app/channels/application_cable/channel.rb"))

        template "application_cable_connection.rb", "app/channels/application_cable/connection.rb"
        template "application_cable_channel.rb", "app/channels/application_cable/channel.rb"
      end

      def create_channel
        template "document_channel.rb", "app/channels/document_channel.rb"
      end

      def create_model
        template "yrby_document_update.rb", "app/models/yrby_document_update.rb"
      end

      def create_store
        template "yrby_document_store.rb", "app/models/yrby_document_store.rb"
      end

      def create_migration_file
        migration_template "create_yrby_document_updates.rb",
                           File.join(db_migrate_path, "create_yrby_document_updates.rb")
      end

      def add_javascript_import
        entrypoint = Pathname(destination_root).join("app/javascript/application.js")
        if entrypoint.exist?
          append_to_file "app/javascript/application.js", %(import "lexxy-realtime"\n)
        else
          say 'Add `import "lexxy-realtime"` to your JavaScript entrypoint (app/javascript/application.js not found).'
        end
      end

      def show_next_steps
        say <<~NEXT

          lexxy-realtime is wired up. Next steps:

            1. bin/rails db:migrate
            2. npm install lexxy-realtime   (or yarn/bun/pnpm)
            3. Declare a collaborative attribute and render it:

                 class Post < ApplicationRecord
                   has_collaborative_rich_text :body
                 end

                 <%= collaborative_rich_text_area form, :body %>

            4. Optional: tighten `authorized?` in
               app/channels/document_channel.rb, and set who shows up on
               cursors with `LexxyRealtime.identity`.
        NEXT
      end

      private

      def migration_version
        "[#{ActiveRecord::VERSION::MAJOR}.#{ActiveRecord::VERSION::MINOR}]"
      end
    end
  end
end
