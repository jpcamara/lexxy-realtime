# frozen_string_literal: true

require "test_helper"

class ConfigTest < Minitest::Test
  def teardown
    LexxyRealtime.store_name = nil
    LexxyRealtime.identity = nil
    LexxyRealtime.materialize_after = nil
  end

  FakeView = Struct.new(:current_user)
  FakeUser = Struct.new(:name, :email_address) do
    def try(attribute) = respond_to?(attribute) ? public_send(attribute) : nil
  end

  def test_defaults
    LexxyRealtime.materialize_after = nil

    assert_equal "DocumentChannel", LexxyRealtime::CHANNEL_NAME
    assert_equal 5, LexxyRealtime.materialize_after
    assert_equal :lexxy_realtime, LexxyRealtime::SGID_PURPOSE
  end

  def test_store_defaults_to_the_engine_model_and_is_swappable
    LexxyRealtime.store_name = nil

    assert_equal LexxyRealtime::Update, LexxyRealtime.store
    LexxyRealtime.store_name = "TestStore"

    assert_equal TestStore, LexxyRealtime.store
  end

  def test_default_identity_reads_current_user
    view = FakeView.new(FakeUser.new("Ada", "ada@example.com"))

    assert_equal({ name: "Ada", color: nil }, LexxyRealtime.identity.call(view))
  end

  def test_default_identity_falls_back_through_attributes_then_anonymous
    view = FakeView.new(FakeUser.new(nil, "ada@example.com"))

    assert_equal "ada@example.com", LexxyRealtime.identity.call(view)[:name]

    no_user = Object.new # no current_user at all

    assert_equal "Anonymous", LexxyRealtime.identity.call(no_user)[:name]
  end

  def test_identity_is_overridable
    LexxyRealtime.identity = ->(_view) { { name: "override", color: "#123456" } }

    assert_equal({ name: "override", color: "#123456" }, LexxyRealtime.identity.call(nil))
  end
end
