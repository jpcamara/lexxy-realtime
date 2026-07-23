# frozen_string_literal: true

module LexxyRealtime
  # Renders a record's collaborative document to HTML server-side and saves it
  # as the Action Text body. One job is scheduled (with a short delay) per
  # recorded change — delay, not debounce — so a typing burst enqueues many;
  # the first to run after the burst renders the final state and the rest skip
  # on the cheap freshness check below. Idempotent either way.
  class MaterializeJob < ActiveJob::Base
    queue_as :default

    # The record was deleted between the edit and the job running; there is
    # nothing left to materialize into.
    discard_on ActiveJob::DeserializationError

    # Peers typing hold the per-record lock; unlike a page read (which serves
    # the current value), a job can simply run again.
    retry_on ActiveRecord::LockWaitTimeout, ActiveRecord::Deadlocked, wait: 2, attempts: 5

    def perform(record, field)
      return if already_fresh?(record, field)

      record.materialize_collaborative_rich_text!(field)
    end

    private

    # Two indexed queries; skips the document load and render when an earlier
    # job (or a fresh read) already materialized everything this job saw.
    def already_fresh?(record, field)
      store = LexxyRealtime.store
      return false unless store.respond_to?(:latest_change_at)

      latest = store.latest_change_at(record.collaborative_document_key(field))
      return true if latest.nil?

      done_at = record.collaborative_rich_text_materialized_at(field)
      !!(done_at && done_at > latest)
    end
  end
end
