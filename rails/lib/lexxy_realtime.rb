# frozen_string_literal: true

require "lexxy_realtime/version"
require "lexxy_realtime/collaborative"
require "lexxy_realtime/form_builder"
require "lexxy_realtime/engine"

# Rails integration for collaborative Lexxy editing with yrby.
module LexxyRealtime
  # Signed ids from the form helper carry this purpose scoped per field
  # (sgid_purpose), so a token minted elsewhere can't join a document.
  SGID_PURPOSE = :lexxy_realtime

  # The channel the installer generates and the form helper points elements at.
  CHANNEL_NAME = "DocumentChannel"

  class << self
    def sgid_purpose(field) = "#{SGID_PURPOSE}/#{field}"

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
  end
end
