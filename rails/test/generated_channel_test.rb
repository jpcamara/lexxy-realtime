# frozen_string_literal: true

require_relative "test_helper"
require "action_cable/channel/test_case"

# This helper doesn't boot Rails, so give Action Cable its test adapter.
ActionCable.server.config.cable = { "adapter" => "test" }
ActionCable.server.config.logger = Logger.new(File::NULL)

module ApplicationCable
  class Channel < ActionCable::Channel::Base; end
end

# Load the channel exactly as the install generator writes it.
load File.expand_path("../lib/generators/lexxy_realtime/install/templates/document_channel.rb", __dir__)

# Run the generated channel the way an app does after filling in its access
# check. yrby-rails 0.7 calls authorized?(key) from sync_subscribed, so the
# generated method has to accept the key. Calling super passes along whatever
# arguments the concern sent.
class GeneratedChannelTest < ActionCable::Channel::TestCase
  tests DocumentChannel

  ALLOW = Module.new do
    def authorized?(*args)
      super
      true
    end
  end

  def setup
    DocumentChannel.prepend(ALLOW) unless DocumentChannel.ancestors.include?(ALLOW)
    @post = Post.create!(title: "Hello")
    stub_connection
  end

  def test_an_authorized_subscriber_is_confirmed
    subscribe sgid: @post.to_signed_global_id(for: LexxyRealtime.sgid_purpose("body")).to_s, field: "body"

    assert_predicate subscription, :confirmed?
  end

  def test_a_token_for_another_field_is_rejected
    subscribe sgid: @post.to_signed_global_id(for: LexxyRealtime.sgid_purpose("title")).to_s, field: "body"

    assert_predicate subscription, :rejected?
  end
end
