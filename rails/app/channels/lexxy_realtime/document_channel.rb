# frozen_string_literal: true

module LexxyRealtime
  # The channel behind collaborative_rich_textarea. It's yrby-rails'
  # Y::DocumentChannel with one addition: after each change is saved, the
  # Action Text attribute is rendered again from the full document.
  #
  # Everything else comes from Y::DocumentChannel. The browser subscribes
  # with the signed grant the form helper rendered, and the channel looks up
  # the record from it. It rejects a missing, tampered, expired, or
  # wrong-field grant, a deleted record, and a field that isn't declared with
  # has_collaborative_rich_text. To also check the user's permissions, give
  # it an authorize_document block:
  #
  #   # config/initializers/lexxy_realtime.rb
  #   Rails.application.config.to_prepare do
  #     LexxyRealtime::DocumentChannel.authorize_document do |record, name|
  #       record.editable_by?(current_user)
  #     end
  #   end
  class DocumentChannel < Y::DocumentChannel
    # Logs render failures and keeps going, because the change is already
    # saved. The next change renders the document again. Raising here would
    # make the browser resend an update the server already has.
    on_change do |key, update|
      document.append(update)
      begin
        record.refresh_collaborative_rich_text(params[:name])
      rescue StandardError => e
        Rails.logger&.error("lexxy-realtime render failed for #{key}: #{e.class}: #{e.message}")
      end
    end

    private

    # Only fields declared with has_collaborative_rich_text open here. A
    # grant for another collaborative attribute of the same record belongs to
    # Y::DocumentChannel.
    def authorized?(key)
      record.respond_to?(:collaborative_rich_text?) && record.collaborative_rich_text?(params[:name]) && super
    end
  end
end
