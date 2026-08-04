# frozen_string_literal: true

# Live edits sync through this channel into the record's collaborative
# document (a Y::Document, from yrby). The regular attribute — Action Text
# when the model has it — is rendered from the document on every recorded
# change (on_change below). Clients join with a signed GlobalID minted by
# the form helper; they never name documents.
class DocumentChannel < ApplicationCable::Channel
  include Y::ActionCable

  on_load { |key| Y::Document.load_state(key) }
  on_change do |key, update|
    Y::Document.append(key, update)
    # Write-through: the stored attribute tracks the document. If the
    # render fails we log it. The change is already recorded, and raising
    # would make the client retransmit an update whose replay skips
    # on_change; the next change re-renders everything anyway.
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

  # The signed GlobalID stops clients naming arbitrary records — only ids
  # your app minted for this purpose locate. It isn't tied to a user,
  # though: anyone holding the token can present it. Check the connecting
  # user here — e.g. `record.editable_by?(current_user)`, with current_user
  # from `identified_by :current_user` in ApplicationCable::Connection.
  # Runs at subscribe, so it also catches access revoked after the page
  # rendered.
  def authorized?
    true
  end

  def record
    @record ||= GlobalID::Locator.locate_signed(params[:sgid], for: LexxyRealtime::SGID_PURPOSE)
  end

  def field
    params[:field].to_s
  end
end
