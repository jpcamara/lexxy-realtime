# frozen_string_literal: true

module LexxyRealtime
  # The durable update log for collaborative documents. All the behavior —
  # load/append, inline compaction (`compact_every`), and the pending-gap
  # compaction guard — comes from yrby's Y::UpdateLog; this class
  # just binds it to the lexxy_realtime_updates table.
  #
  # This is the default store; point `LexxyRealtime.store_name` at any class
  # with the same `load`/`append` contract to replace it.
  class Update < ActiveRecord::Base
    self.table_name = "lexxy_realtime_updates"

    include Y::UpdateLog
  end
end
