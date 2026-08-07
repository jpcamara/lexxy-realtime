# frozen_string_literal: true

# Syncs clients with the record's collaborative document. Each stored
# update is rendered back to the Action Text attribute.
class DocumentChannel < ApplicationCable::Channel
  include Y::ActionCable

  on_load { |key| Y::Document.load_state(key) }
  on_change do |key, update|
    Y::Document.append(key, update)
    # Log render failures. The stored document renders again after the
    # next update. Raising would make the client resend an update the
    # server already has.
    begin
      record.refresh_collaborative_rich_text(field)
    rescue StandardError => e
      Rails.logger.error("lexxy-realtime render failed for #{key}: #{e.class}: #{e.message}")
    end
  end

  def subscribed
    reject and return unless record&.collaborative_rich_text?(field)
    reject and return unless authorized?

    sync_subscribed(record.find_or_create_collaborative_document(field).key)
  end

  def receive(data)
    return unless record

    sync_receive(data, record.find_or_create_collaborative_document(field).key)
  end

  private

  # The demo has no users, so anyone may edit. A real app checks its
  # current user here.
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
