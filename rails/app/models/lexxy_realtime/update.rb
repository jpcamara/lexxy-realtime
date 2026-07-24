# frozen_string_literal: true

module LexxyRealtime
  # The update log: one CRDT delta (or compacted snapshot) per row, belonging
  # to a Document. All log behavior (load/append, compaction, the pending-gap
  # guard, latest_change_at) is yrby's Y::UpdateLog, keyed here by
  # document_id. Swap the whole store via LexxyRealtime.store_name.
  class Update < ActiveRecord::Base
    self.table_name = "lexxy_realtime_updates"

    belongs_to :document, class_name: "LexxyRealtime::Document"

    include Y::UpdateLog

    def self.key_column = :document_id
  end
end
