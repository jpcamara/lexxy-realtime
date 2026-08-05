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

  # Everyone is denied until you fill this in. The signed GlobalID stops
  # clients naming arbitrary records but isn't tied to a user. Check
  # current_user here (identified_by in ApplicationCable::Connection).
  # Runs at subscribe, so it also catches access revoked after render.
  def authorized?
    false
  end

  # Scoped to the record and the field; a token for another attribute or
  # a deleted record locates nothing, and subscribed rejects.
  def record
    @record ||= GlobalID::Locator.locate_signed(params[:sgid], for: LexxyRealtime.sgid_purpose(field))
  rescue ActiveRecord::RecordNotFound
    nil
  end

  def field
    params[:field].to_s
  end
end
