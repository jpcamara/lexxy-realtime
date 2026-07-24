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
    # The update store: any class implementing load/append (plus
    # latest_change_at for read freshness). Resolved by name so code
    # reloading stays clean.
    attr_writer :store_name

    def store_name = @store_name ||= "Y::DocumentUpdate"
    def store = store_name.constantize

    # Delay between a recorded change and its materialization job.
    attr_writer :materialize_after

    def materialize_after = @materialize_after ||= 5

    # Cursor identity, called with the view context; returns { name:, color: }
    # (a nil color gets a stable one derived from the name).
    attr_writer :identity

    def identity
      @identity ||= lambda do |view|
        user = view.respond_to?(:current_user) ? view.current_user : nil
        # Deliberately no email fallback: an email is a poor thing to print on
        # a cursor label. Set LexxyRealtime.identity to choose.
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
