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

  # Check whether the current user may edit this record, e.g.
  # record.editable_by?(current_user) with identified_by :current_user
  # on the connection. Nothing connects until this returns true.
  def authorized?
    false
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
