# frozen_string_literal: true

require "test_helper"
require_relative "../app/channels/lexxy_realtime/document_channel"

# No Rails app here: point the cable server at the test adapter by hand.
ActionCable.server.config.cable = { "adapter" => "test" }
ActionCable.server.config.logger = Logger.new(File::NULL)

# The gem-shipped channel: the form helper's signed, field-scoped token in,
# the record's collaborative document (with materialization) out, and
# nothing for the app to write.
class DocumentChannelTest < ActionCable::Channel::TestCase
  tests LexxyRealtime::DocumentChannel

  def setup
    Y::DocumentUpdate.delete_all
    Y::Document.delete_all
    @post = Post.create!(title: "granted")
    stub_connection
  end

  def sgid(field = :body) = @post.to_sgid(for: LexxyRealtime.sgid_purpose(field)).to_s

  def test_the_form_helpers_token_subscribes_and_gets_the_opening_handshake
    subscribe sgid: sgid, field: "body"

    assert_predicate subscription, :confirmed?
    assert transmissions.any? { |m| m["update"].present? }, "expected a SyncStep1 handshake"
    assert_equal 1, Y::Document.count, "the document is created on subscribe"
  end

  def test_an_update_is_recorded_and_materialized_into_the_attribute
    subscribe sgid: sgid, field: "body"
    frame = Y.wrap_update(lexxy_full_state)
    perform :receive, "update" => Base64.strict_encode64(frame), "id" => 7

    assert_includes transmissions, { "ack" => 7 }
    assert_equal lexxy_full_html, @post.reload.body, "the attribute holds the rendered document"
  end

  def test_a_missing_token_is_rejected
    subscribe field: "body"

    assert_predicate subscription, :rejected?
    assert_equal 0, Y::Document.count
  end

  def test_a_tampered_token_is_rejected
    subscribe sgid: "#{sgid}x", field: "body"

    assert_predicate subscription, :rejected?
  end

  def test_a_token_for_another_field_is_rejected
    subscribe sgid: sgid(:body), field: "title"

    assert_predicate subscription, :rejected?, "a :body token must not open :title"
  end

  def test_a_signed_token_for_an_undeclared_field_is_rejected
    subscribe sgid: sgid(:title), field: "title"

    assert_predicate subscription, :rejected?, "title is not collaborative on Post"
  end

  def test_a_token_for_a_destroyed_record_is_rejected
    token = sgid
    @post.destroy!

    subscribe sgid: token, field: "body"

    assert_predicate subscription, :rejected?
  end
end
