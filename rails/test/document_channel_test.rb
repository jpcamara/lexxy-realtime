# frozen_string_literal: true

require "test_helper"
require File.join(Gem.loaded_specs.fetch("yrby-rails").full_gem_path, "app/channels/y/document_channel")
require_relative "../app/channels/lexxy_realtime/document_channel"

# No Rails app here: point the cable server at the test adapter by hand.
ActionCable.server.config.cable = { "adapter" => "test" }
ActionCable.server.config.logger = Logger.new(File::NULL)

# The gem's channel: Y::DocumentChannel plus rendering the Action Text
# attribute after each change.
class DocumentChannelTest < ActionCable::Channel::TestCase
  tests LexxyRealtime::DocumentChannel

  def setup
    Y::DocumentUpdate.delete_all
    Y::Document.delete_all
    @post = Post.create!(title: "granted")
    stub_connection
  end

  def teardown
    LexxyRealtime::DocumentChannel.document_authorizer = nil
  end

  def grant(field = :body) = @post.collaborative_sgid(field)

  def test_the_form_helpers_grant_subscribes_and_gets_the_opening_handshake
    subscribe grant: grant, name: "body"

    assert_predicate subscription, :confirmed?
    assert transmissions.any? { |m| m["update"].present? }, "expected a SyncStep1 handshake"
    assert_equal 0, Y::Document.count, "subscribing alone stores nothing"
  end

  def test_an_update_is_recorded_and_materialized_into_the_attribute
    subscribe grant: grant, name: "body"
    frame = Y.wrap_update(lexxy_full_state)
    perform :receive, "update" => Base64.strict_encode64(frame), "id" => 7

    assert_includes transmissions, { "ack" => 7 }
    assert_equal lexxy_full_html, @post.reload.body, "the attribute holds the rendered document"
  end

  def test_a_missing_grant_is_rejected
    subscribe name: "body"

    assert_predicate subscription, :rejected?
    assert_equal 0, Y::Document.count
  end

  def test_a_tampered_grant_is_rejected
    subscribe grant: "#{grant}x", name: "body"

    assert_predicate subscription, :rejected?
  end

  def test_a_grant_for_another_field_is_rejected
    subscribe grant: grant(:body), name: "title"

    assert_predicate subscription, :rejected?, "a :body grant must not open :title"
  end

  def test_a_grant_for_a_field_without_collaborative_rich_text_is_rejected
    subscribe grant: grant(:title), name: "title"

    assert_predicate subscription, :rejected?, "title is not collaborative on Post"
  end

  def test_a_grant_for_a_destroyed_record_is_rejected
    token = grant
    @post.destroy!

    subscribe grant: token, name: "body"

    assert_predicate subscription, :rejected?
  end

  def test_authorize_document_can_deny_a_valid_grant
    LexxyRealtime::DocumentChannel.authorize_document { |record, _name| record.title == "someone else's" }

    subscribe grant: grant, name: "body"

    assert_predicate subscription, :rejected?
  end

  def test_an_expired_grant_is_rejected
    token = @post.collaborative_sgid(:body, expires_in: 1.second)
    travel_to(2.seconds.from_now) do
      subscribe grant: token, name: "body"
    end

    assert_predicate subscription, :rejected?
  end
end
