# frozen_string_literal: true

# Syncs clients with the record's collaborative document. Each stored
# update is rendered back to the Action Text attribute.
class DocumentChannel < ApplicationCable::Channel
  include Y::ActionCable

  # Storage routes through the record's association, so an encrypted
  # attribute reads and writes through Y::EncryptedDocument.
  on_load { |_key| record.find_or_create_collaborative_document(field).load_state }
  on_change do |key, update|
    record.find_or_create_collaborative_document(field).append(update)
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

  # Invalid, stale, or field-mismatched tokens return nil and are
  # rejected by subscribed.
  def record
    @record ||= GlobalID::Locator.locate_signed(params[:sgid], for: LexxyRealtime.sgid_purpose(field))
  rescue ActiveRecord::RecordNotFound
    nil
  end

  def field
    params[:field].to_s
  end
end
