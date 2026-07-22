# frozen_string_literal: true

module LexxyRealtime
  # The durable update log for collaborative documents: an append-only table
  # of CRDT deltas with compaction, one row per recorded edit, scoped by
  # document_key. Appends are cheap and safe under concurrency (CRDT updates
  # merge commutatively, so row order never matters). Compaction keeps loads
  # fast by collapsing a document's rows into one snapshot row once
  # `compact_every` updates accumulate.
  #
  # This is the default store; point `LexxyRealtime.store_name` at any class
  # with the same `load`/`append` contract to replace it.
  class Update < ActiveRecord::Base
    self.table_name = "lexxy_realtime_updates"

    # How many rows a document may accumulate before an append triggers
    # compaction inline. Raise it (or call compact! from a job instead) if
    # the inline count query ever shows up in a profile.
    class_attribute :compact_every, default: 500, instance_writer: false

    class << self
      # The merged state of a document, or nil if nothing was ever recorded.
      def load(key)
        payloads = where(document_key: key).order(:id).pluck(:payload)
        return nil if payloads.empty?

        build_doc(payloads).compacted_state_update
      end

      def append(key, update)
        create!(document_key: key, payload: update)
        # At-or-over, not an exact multiple: concurrent appends can jump the
        # count past a multiple and would otherwise skip compaction forever.
        compact!(key) if where(document_key: key).count >= compact_every
      end

      # Collapse a document's rows into one snapshot row. Safe to run while
      # appends continue: only the rows read here are deleted, so an update
      # landing mid-compaction survives. Two racing compactions leave two
      # equivalent snapshots, which is harmless — merging is idempotent, and
      # the next compaction collapses them.
      #
      # Skipped while the document holds a pending (causally-gapped) update:
      # the snapshot excludes pending, so compacting now would delete the only
      # copy of a gap that could still heal. The sync channel never records
      # gaps, so this only engages on legacy rows — compaction resumes once
      # the gap heals or the log is repaired.
      def compact!(key)
        rows = where(document_key: key).order(:id).pluck(:id, :payload)
        return if rows.size < 2

        doc = build_doc(rows.map(&:last))
        return if doc.pending?

        transaction do
          create!(document_key: key, payload: doc.compacted_state_update)
          where(id: rows.map(&:first)).delete_all
        end
      end

      private

      # `compacted_state_update` (used by load and compact!) is gap-free, so a
      # gappy update recorded during a network wobble can never poison what
      # gets served to peers — pending structs must not cross the sync
      # boundary.
      def build_doc(payloads)
        doc = Y::Doc.new
        payloads.each { |payload| doc.apply_update(payload) }
        doc
      end
    end
  end
end
