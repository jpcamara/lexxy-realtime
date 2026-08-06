# frozen_string_literal: true

require "test_helper"

class ConfigTest < Minitest::Test
  def teardown
    LexxyRealtime.identity = nil
  end

  FakeView = Struct.new(:current_user)
  FakeUser = Struct.new(:name, :username, :email_address) do
    def try(attribute) = respond_to?(attribute) ? public_send(attribute) : nil
  end

  def test_defaults
    assert_equal "DocumentChannel", LexxyRealtime::CHANNEL_NAME
    assert_equal :lexxy_realtime, LexxyRealtime::SGID_PURPOSE
  end

  def test_default_identity_reads_current_user
    view = FakeView.new(FakeUser.new("Ada", nil, "ada@example.com"))

    assert_equal({ name: "Ada", color: nil }, LexxyRealtime.identity.call(view))
  end

  def test_default_identity_never_exposes_an_email_on_a_cursor
    view = FakeView.new(FakeUser.new(nil, "ada42", "ada@example.com"))

    assert_equal "ada42", LexxyRealtime.identity.call(view)[:name], "uses username when name is blank"

    email_only = FakeView.new(FakeUser.new(nil, nil, "ada@example.com"))

    assert_equal "Anonymous", LexxyRealtime.identity.call(email_only)[:name],
                 "uses Anonymous when only an email is available"
    assert_equal "Anonymous", LexxyRealtime.identity.call(Object.new)[:name]
  end

  def test_identity_is_overridable
    LexxyRealtime.identity = ->(_view) { { name: "override", color: "#123456" } }

    assert_equal({ name: "override", color: "#123456" }, LexxyRealtime.identity.call(nil))
  end
end
