# frozen_string_literal: true

# Syncs live edits into the record's collaborative document and renders
# them back into the attribute on every recorded change. Clients join
# with a signed GlobalID minted by the form helper.
class DocumentChannel < ApplicationCable::Channel
  include Y::ActionCable

  on_load { |key| Y::Document.load_state(key) }
  on_change do |key, update|
    Y::Document.append(key, update)
    # The change is already durable; a failed render logs and catches up
    # on the next change. Raising here would only make the client resend.
    begin
      record.materialize_collaborative_rich_text!(field)
    rescue StandardError => e
      Rails.logger.error("lexxy-realtime render failed for #{key}: #{e.class}: #{e.message}")
    end
  end

  def subscribed
    reject and return unless record&.collaborative_rich_text?(field)
    reject and return unless authorized?

    sync_subscribed(record.collaborative_document!(field).key)
  end

  def receive(data)
    return unless record

    sync_receive(data, record.collaborative_document!(field).key)
  end

  private

  # The demo has no users, so everyone is in; the generated template
  # denies everyone until the app fills this in.
  def authorized?
    true
  end

  # The signed GlobalID is scoped to this record and field — a token
  # minted for one collaborative attribute can't open another. A bad or
  # foreign-purpose token returns nil; a token for a since-deleted record
  # raises. Both mean "no record", and subscribed rejects.
  def record
    @record ||= GlobalID::Locator.locate_signed(params[:sgid], for: LexxyRealtime.sgid_purpose(field))
  rescue ActiveRecord::RecordNotFound
    nil
  end

  def field
    params[:field].to_s
  end
end
