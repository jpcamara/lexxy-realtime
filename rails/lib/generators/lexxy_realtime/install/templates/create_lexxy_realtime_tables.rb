# frozen_string_literal: true

class CreateLexxyRealtimeTables < ActiveRecord::Migration<%= migration_version %>
  def change
    # One row per collaborative attribute, addressed like Action Text's
    # rich_texts: polymorphic record + name. materialized_at is the log
    # version the stored attribute was last rendered from.
    create_table :lexxy_realtime_documents do |t|
      t.references :record, polymorphic: true, null: false
      t.string :name, null: false
      t.datetime :materialized_at
      t.timestamps
      t.index %i[record_type record_id name], unique: true, name: "index_lexxy_realtime_documents_uniqueness"
    end

    # The CRDT update log: one delta (or compacted snapshot) per row.
    create_table :lexxy_realtime_updates do |t|
      t.references :document, null: false, foreign_key: { to_table: :lexxy_realtime_documents }
      # Mediumblob (~16 MB cap) on MySQL — one byte over selects longblob.
      # A no-op hint on PostgreSQL/SQLite. A delta is tiny; snapshots grow
      # with document size.
      t.binary :payload, null: false, limit: 16.megabytes - 1
      t.datetime :created_at, null: false
    end
  end
end
