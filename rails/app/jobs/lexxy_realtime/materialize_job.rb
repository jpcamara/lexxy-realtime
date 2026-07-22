# frozen_string_literal: true

module LexxyRealtime
  # Renders a record's collaborative document to HTML server-side and saves it
  # as the Action Text body. Enqueued (with a short delay) on every recorded
  # change; idempotent, so overlapping enqueues converge on the latest state.
  class MaterializeJob < ActiveJob::Base
    queue_as :default

    # The record was deleted between the edit and the job running; there is
    # nothing left to materialize into.
    discard_on ActiveJob::DeserializationError

    def perform(record, field)
      record.materialize_collaborative_rich_text!(field)
    end
  end
end
