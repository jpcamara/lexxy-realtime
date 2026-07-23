# frozen_string_literal: true

module LexxyRealtime
  # One delayed job per recorded change; after a typing burst the first run
  # renders the final state and the rest skip on the freshness check.
  class MaterializeJob < ActiveJob::Base
    queue_as :default
    discard_on ActiveJob::DeserializationError # the record was deleted
    retry_on ActiveRecord::LockWaitTimeout, ActiveRecord::Deadlocked, wait: 2, attempts: 5

    def perform(record, field)
      return if record.collaborative_rich_text_freshness(field) == :fresh

      record.materialize_collaborative_rich_text!(field)
    end
  end
end
