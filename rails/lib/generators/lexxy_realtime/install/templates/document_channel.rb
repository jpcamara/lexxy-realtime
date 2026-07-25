# frozen_string_literal: true

# Live edits sync through this channel into the record's collaborative
# document (a Y::Document and its update log, from yrby). The regular
# attribute — Action Text when the model has it — is a projection of that
# log, re-rendered shortly after each recorded change (on_change below) and
# on any stale read. Clients join with a signed GlobalID minted by the form
# helper; they never name documents.
class DocumentChannel < ApplicationCable::Channel
  include Y::ActionCable

  on_load { |document_id| LexxyRealtime.store.load(document_id) }
  on_change do |document_id, update|
    # Schedule before recording: a failed schedule raises with nothing
    # recorded, so the client's retransmit retries both.
    record.materialize_collaborative_rich_text_later(field)
    LexxyRealtime.store.append(document_id, update)
  end

  def subscribed
    reject and return unless record&.collaborative_rich_text?(field)
    reject and return unless authorized?

    sync_subscribed(record.collaborative_document!(field).id)
  end

  def receive(data)
    return unless record

    sync_receive(data, record.collaborative_document!(field).id)
  end

  private

  # The signed GlobalID proves your app rendered this user the editor for
  # this record; tighten here when page access isn't the whole story —
  # e.g. `record.editable_by?(current_user)`, with current_user coming from
  # `identified_by :current_user` in ApplicationCable::Connection. Runs at
  # subscribe, so it also catches access revoked after the page rendered.
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
