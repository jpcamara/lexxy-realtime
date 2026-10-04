# frozen_string_literal: true

require "concurrent/map"
require "lexxy_realtime/version"
require "lexxy_realtime/collaborative"
require "lexxy_realtime/form_builder"
require "lexxy_realtime/engine"

# Rails integration for collaborative Lexxy editing with yrby.
module LexxyRealtime
  class << self
    # The channel the form helper points elements at. It defaults to the
    # gem's LexxyRealtime::DocumentChannel. To add a permission check, use
    # LexxyRealtime::DocumentChannel.authorize_document instead of a
    # subclass. Set this only when you need a different channel entirely.
    attr_writer :channel_name

    def channel_name
      @channel_name || "LexxyRealtime::DocumentChannel"
    end

    # The signed-GlobalID purpose of a field's grant. It differs from
    # yrby-rails' purpose, so the grant opens LexxyRealtime::DocumentChannel
    # and not Y::DocumentChannel, which doesn't render the field or run
    # LexxyRealtime::DocumentChannel's authorize_document block.
    def grant_purpose(name) = "lexxy_realtime/#{name}"

    # Cursor identity, called with the view context; returns { name:, color: }
    # (a nil color gets a stable one derived from the name).
    attr_writer :identity

    def identity
      @identity ||= lambda do |view|
        user = view.respond_to?(:current_user) ? view.current_user : nil
        # Use Anonymous when no display name is available.
        name = user && %i[name username handle].lazy.filter_map { |a| user.try(a).presence }.first
        { name: name || "Anonymous", color: nil }
      end
    end

    # A stable, readable cursor color per collaborator name.
    def collaborator_color(name)
      "hsl(#{name.to_s.each_byte.reduce(0) { |acc, b| ((acc * 31) + b) % 360 }}, 70%, 45%)"
    end

    # Returns true the first time this process sees the key. The
    # unknown-node warning uses it to log once per class, field, and set
    # of types.
    def first_sighting_of_unknown_types?(key)
      @unknown_types_seen.put_if_absent(key, true).nil?
    end
  end

  @unknown_types_seen = Concurrent::Map.new
end
