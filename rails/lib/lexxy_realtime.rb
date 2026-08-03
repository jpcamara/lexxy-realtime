# frozen_string_literal: true

require "lexxy_realtime/version"
require "lexxy_realtime/collaborative"
require "lexxy_realtime/form_builder"
require "lexxy_realtime/engine"

# Collaborative Lexxy editing for Rails: a model macro, a form helper, an
# install generator, and server-side materialization back into Action Text,
# built on yrby (Yjs CRDTs in Ruby, no Node).
module LexxyRealtime
  # Stamped into and verified against the signed GlobalIDs the form helper
  # mints, so a signed id from another feature can't join a document.
  SGID_PURPOSE = :lexxy_realtime

  # The channel the installer generates and the form helper points elements at.
  CHANNEL_NAME = "DocumentChannel"

  class << self
    # Cursor identity, called with the view context; returns { name:, color: }
    # (a nil color gets a stable one derived from the name).
    attr_writer :identity

    def identity
      @identity ||= lambda do |view|
        user = view.respond_to?(:current_user) ? view.current_user : nil
        # No email fallback: an email is a poor cursor label. Set
        # LexxyRealtime.identity to choose.
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
