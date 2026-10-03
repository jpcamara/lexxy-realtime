# frozen_string_literal: true

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

    # Limits the unknown-node-type log line to once per class, field, and
    # set of types, per process.
    def first_sighting_of_unknown_types?(key)
      @unknown_types_mutex.synchronize { !@unknown_types_seen.add?(key).nil? }
    end
  end

  @unknown_types_seen = Set.new
  @unknown_types_mutex = Mutex.new
end
