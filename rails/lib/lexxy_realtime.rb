# frozen_string_literal: true

require "lexxy_realtime/version"
require "lexxy_realtime/collaborative"
require "lexxy_realtime/engine" if defined?(Rails::Engine)

# Rails integration for collaborative Lexxy editing over yrby.
#
# The pieces:
#   - `has_collaborative_rich_text :body` (model macro) — a regular Action Text
#     attribute whose live edits sync through Yjs and are materialized back
#     into the stored rich text on the server.
#   - `collaborative_rich_text_area form, :body` (view helper) — renders the
#     Lexxy editor with a `<lexxy-collaboration>` element wired to the record.
#   - `rails g lexxy_realtime:install` — the channel, store, and migration.
#   - `LexxyRealtime::MaterializeJob` — renders the collaborative document to
#     HTML server-side (Y::Lexxy, no Node) and saves it as the Action Text
#     body.
module LexxyRealtime
  class << self
    # The Action Cable channel class name the view helper points the element
    # at. The install generator creates this channel.
    attr_writer :channel_name

    def channel_name
      @channel_name ||= "DocumentChannel"
    end

    # The durable update store, resolved by name on use so the app's generated
    # class (or a custom one) is picked up after boot and reloads cleanly in
    # development. Must respond to `load(key) -> bytes | nil` and
    # `append(key, update)`.
    attr_writer :store_name

    def store_name
      @store_name ||= "YrbyDocumentStore"
    end

    def store
      store_name.constantize
    end

    # The purpose stamped into the signed GlobalIDs the helper renders and the
    # channel verifies, so a signed id minted for another feature can't be
    # replayed to join a document.
    def sgid_purpose
      :lexxy_realtime
    end

    # How long after the last recorded change the materializer runs. Each
    # change (re)enqueues the job with this delay; the job itself is
    # idempotent, so overlapping enqueues settle on the latest state.
    attr_writer :materialize_after

    def materialize_after
      @materialize_after ||= 5
    end

    # Resolves the collaborator identity shown on cursors, in the view's
    # context. Override with any callable returning { name:, color: } (color
    # may be nil — the helper derives a stable one from the name):
    #
    #   LexxyRealtime.identity = ->(view) { { name: view.current_user.handle, color: nil } }
    attr_writer :identity

    def identity
      @identity ||= lambda do |view|
        user = view.respond_to?(:current_user) ? view.current_user : nil
        name = nil
        if user
          %i[name username handle email_address email].each do |attribute|
            value = user.try(attribute)
            break name = value if value.present?
          end
        end
        { name: name || "Anonymous", color: nil }
      end
    end

    def resolve_identity(view)
      identity.call(view)
    end
  end
end
