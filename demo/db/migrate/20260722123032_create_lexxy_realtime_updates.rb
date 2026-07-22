# frozen_string_literal: true

class CreateLexxyRealtimeUpdates < ActiveRecord::Migration[8.1]
  def change
    create_table :lexxy_realtime_updates do |t|
      # Mediumblob (~16 MB cap) on MySQL — one byte over this limit selects
      # longblob instead. A no-op hint on PostgreSQL/SQLite. A single CRDT
      # delta is tiny; snapshots grow with document size.
      t.binary :payload, null: false, limit: 16.megabytes - 1
      t.string :document_key, null: false, index: true
      t.datetime :created_at, null: false
    end
  end
end
