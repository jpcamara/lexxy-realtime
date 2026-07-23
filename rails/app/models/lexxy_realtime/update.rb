# frozen_string_literal: true

module LexxyRealtime
  # The update log, bound to lexxy_realtime_updates. All behavior (load and
  # append, compaction, the pending-gap guard, latest_change_at) is yrby's
  # Y::UpdateLog; swap the whole store via LexxyRealtime.store_name.
  class Update < ActiveRecord::Base
    self.table_name = "lexxy_realtime_updates"

    include Y::UpdateLog
  end
end
