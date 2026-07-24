# frozen_string_literal: true

require "test_helper"
require "action_view"
require "json"

class HelperTest < Minitest::Test
  # A view context with real tag helpers; the form builder is the real
  # ActionView one with the engine's prepend, with Lexxy's editor method
  # doubled to its exact contract (block content becomes the editor's child).
  class FakeView
    include ActionView::Helpers::TagHelper
    include ActionView::Helpers::CaptureHelper

    attr_accessor :output_buffer, :current_user

    def initialize(user = nil)
      @output_buffer = ActionView::OutputBuffer.new
      @current_user = user
    end
  end

  FakeUser = Struct.new(:name) do
    def try(attribute) = respond_to?(attribute) ? public_send(attribute) : nil
  end

  ActionView::Helpers::FormBuilder.prepend(LexxyRealtime::FormBuilder) # as the engine does

  def setup
    @post = Post.create!(title: "Doc")
    @view = FakeView.new(FakeUser.new("Ada"))
    @form = ActionView::Helpers::FormBuilder.new("post", @post, @view, {})
    @form.define_singleton_method(:lexxy_rich_textarea) do |method, _options = {}, &block|
      %(<lexxy-editor name="post[#{method}]">#{block.call}</lexxy-editor>)
    end
  end

  def element_attributes(html)
    fragment = html[/<lexxy-collaboration[^>]*>/]
    fragment.scan(/([\w-]+)="([^"]*)"/).to_h.transform_values { |v| CGI.unescapeHTML(v) }
  end

  def test_renders_the_collaboration_element_inside_the_editor
    html = @form.collaborative_rich_textarea(:body)

    assert_match %r{<lexxy-editor[^>]*><lexxy-collaboration.*</lexxy-collaboration></lexxy-editor>}, html
    assert_equal html, @form.collaborative_rich_text_area(:body), "underscore alias"
  end

  def test_wires_the_element_to_the_record
    attrs = element_attributes(@form.collaborative_rich_textarea(:body))

    assert_equal "post-#{@post.id}-body", attrs["doc-id"]
    assert_equal "Ada", attrs["name"]
    assert_equal LexxyRealtime::CHANNEL_NAME, attrs["channel-name"]

    params = JSON.parse(attrs["channel-params"])

    assert_equal "body", params["field"]
    assert_equal @post, GlobalID::Locator.locate_signed(params["sgid"], for: LexxyRealtime::SGID_PURPOSE),
                 "the signed GlobalID round-trips to the record"
  end

  def test_sgid_is_purpose_scoped
    params = JSON.parse(element_attributes(@form.collaborative_rich_textarea(:body))["channel-params"])

    assert_nil GlobalID::Locator.locate_signed(params["sgid"], for: :something_else),
               "a signed id minted for collaboration must not verify for another purpose"
  end

  def test_identity_overrides_and_stable_color
    attrs = element_attributes(@form.collaborative_rich_textarea(:body, name: "Grace", color: "#111111"))

    assert_equal "Grace", attrs["name"]
    assert_equal "#111111", attrs["color"]

    default = element_attributes(@form.collaborative_rich_textarea(:body))

    assert_equal default["color"], element_attributes(@form.collaborative_rich_textarea(:body))["color"],
                 "derived cursor color is stable per name"
    assert_match(/\Ahsl\(\d+, 70%, 45%\)\z/, default["color"])
  end

  def test_rejects_non_collaborative_and_unpersisted_records
    assert_raises(ArgumentError) { @form.collaborative_rich_textarea(:title) }

    unpersisted = ActionView::Helpers::FormBuilder.new("post", Post.new, @view, {})

    assert_raises(ArgumentError) { unpersisted.collaborative_rich_textarea(:body) }
  end
end
