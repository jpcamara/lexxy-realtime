# frozen_string_literal: true

module LexxyRealtime
  # The gem-shipped channel behind collaborative_rich_textarea — the whole
  # wire side of a collaborative Lexxy field, the way Turbo::StreamsChannel
  # is the whole wire side of a turbo_stream_from subscription. The form
  # helper points elements at it by name; there is no channel to generate
  # or write.
  #
  # The client never names a document. It presents the signed, field-scoped
  # token the form helper minted (record.to_sgid for "lexxy_realtime/<field>"),
  # and the document is whatever that token verifies to. Authorization
  # happened when your app decided to render the form for that record; the
  # token carries that decision to the socket. A missing, tampered, expired,
  # or wrong-field token — or one whose record no longer exists or whose
  # field is not collaborative — is rejected. To layer further checks,
  # subclass this channel, override authorized?, and point
  # LexxyRealtime.channel_name at your subclass.
  #
  # Storage routes through the record's association, so an encrypted
  # attribute reads and writes through Y::EncryptedDocument. After each
  # recorded update the attribute is refreshed from the full document.
  #
  # ::ActionCable::Channel::Base rather than ApplicationCable::Channel: the
  # gem cannot depend on an app-defined class, and the token replaces
  # connection identification.
  class DocumentChannel < ::ActionCable::Channel::Base
    include Y::ActionCable

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
      reject and return unless authorized?

      sync_subscribed(record.find_or_create_collaborative_document(field).key)
    end

    def receive(data)
      return unless record

      sync_receive(data, record.find_or_create_collaborative_document(field).key)
    end

    private

    # Possession of the field-scoped token is the authorization — the form
    # helper only mints it on pages your app rendered. The optional key
    # argument keeps this compatible with yrby-rails' authorized? seam,
    # which re-checks inside sync_subscribed.
    def authorized?(_key = nil)
      record.present? && record.collaborative_rich_text?(field)
    end

    # Invalid, stale, or field-mismatched tokens return nil and are
    # rejected by subscribed. Re-derived per command: under AnyCable each
    # RPC call builds a fresh channel instance.
    def record
      @record ||= GlobalID::Locator.locate_signed(params[:sgid], for: LexxyRealtime.sgid_purpose(field))
    rescue ActiveRecord::RecordNotFound
      nil
    end

    def field
      params[:field].to_s
    end
  end
end
