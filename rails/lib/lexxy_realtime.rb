# frozen_string_literal: true

require "concurrent/map"
require "lexxy_realtime/version"
require "lexxy_realtime/collaborative"
require "lexxy_realtime/form_builder"
require "lexxy_realtime/engine"

# Rails integration for collaborative Lexxy editing with yrby.
module LexxyRealtime
  class << self
    # The channel the form helper tells each editor to subscribe to. It
    # defaults to LexxyRealtime::DocumentChannel. For a permission check,
    # give that channel an authorize_document block. Set this only if you
    # need a different channel.
    attr_writer :channel_name

    def channel_name
      @channel_name || "LexxyRealtime::DocumentChannel"
    end

    # The signed GlobalID purpose for a field's grant. yrby-rails uses a
    # different purpose, so Y::DocumentChannel rejects this grant. That
    # matters because Y::DocumentChannel doesn't render the field or run
    # the authorize_document block.
    def grant_purpose(name) = "lexxy_realtime/#{name}"

    # Called with the view context to get the cursor name and color, as
    # { name:, color: }. When color is nil, the form helper picks one
    # based on the name.
    attr_writer :identity

    def identity
      @identity ||= lambda do |view|
        user = view.respond_to?(:current_user) ? view.current_user : nil
        name = user && %i[name username handle].lazy.filter_map { |a| user.try(a).presence }.first
        { name: name || "Anonymous", color: nil }
      end
    end

    # Returns a readable cursor color. The same name always gets the same color.
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
