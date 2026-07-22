# frozen_string_literal: true

require "test_helper"
require "action_view"
require "json"
require_relative "../app/helpers/lexxy_realtime/collaboration_helper"

class HelperTest < Minitest::Test
  # A view context with real tag helpers plus the collaboration helper — the
  # form is doubled with the exact lexxy_rich_textarea(method, options, &block)
  # contract (the block's content becomes the editor element's child).
  class FakeView
    include ActionView::Helpers::TagHelper
    include ActionView::Helpers::CaptureHelper
    include LexxyRealtime::CollaborationHelper

    attr_accessor :output_buffer, :current_user

    def initialize(user = nil)
      @output_buffer = ActionView::OutputBuffer.new
      @current_user = user
    end
  end

  FakeUser = Struct.new(:name) do
    def try(attribute) = respond_to?(attribute) ? public_send(attribute) : nil
  end

  class FakeForm
    attr_reader :object, :captured_options

    def initialize(object) = @object = object

    def lexxy_rich_textarea(method, options = {})
      @captured_options = options
      inner = yield
      %(<lexxy-editor name="post[#{method}]">#{inner}</lexxy-editor>)
    end
  end

  def setup
    @post = Post.create!(title: "Doc")
    @view = FakeView.new(FakeUser.new("Ada"))
    @form = FakeForm.new(@post)
  end

  def element_attributes(html)
    fragment = html[/<lexxy-collaboration[^>]*>/]
    fragment.scan(/([\w-]+)="([^"]*)"/).to_h.transform_values { |v| CGI.unescapeHTML(v) }
  end

  def test_renders_the_collaboration_element_inside_the_editor
    html = @view.collaborative_rich_text_area(@form, :body)

    assert_match %r{<lexxy-editor[^>]*><lexxy-collaboration.*</lexxy-collaboration></lexxy-editor>}, html
  end

  def test_wires_the_element_to_the_record
    attrs = element_attributes(@view.collaborative_rich_text_area(@form, :body))

    assert_equal @post.collaborative_document_key(:body), attrs["doc-id"]
    assert_equal "Ada", attrs["name"]
    assert_equal LexxyRealtime.channel_name, attrs["channel-name"]

    params = JSON.parse(attrs["channel-params"])

    assert_equal "body", params["field"]
    located = GlobalID::Locator.locate_signed(params["sgid"], for: LexxyRealtime.sgid_purpose)

    assert_equal @post, located, "the signed GlobalID round-trips to the record"
  end

  def test_sgid_is_purpose_scoped
    attrs = element_attributes(@view.collaborative_rich_text_area(@form, :body))
    params = JSON.parse(attrs["channel-params"])

    assert_nil GlobalID::Locator.locate_signed(params["sgid"], for: :something_else),
               "a signed id minted for collaboration must not verify for another purpose"
  end

  def test_identity_overrides_and_stable_color
    attrs = element_attributes(@view.collaborative_rich_text_area(@form, :body, name: "Grace", color: "#111111"))

    assert_equal "Grace", attrs["name"]
    assert_equal "#111111", attrs["color"]

    default = element_attributes(@view.collaborative_rich_text_area(@form, :body))
    again = element_attributes(@view.collaborative_rich_text_area(@form, :body))

    assert_equal default["color"], again["color"], "derived cursor color is stable per name"
    assert_match(/\Ahsl\(\d+, 70%, 45%\)\z/, default["color"])
  end

  def test_rejects_non_collaborative_and_unpersisted_records
    assert_raises(ArgumentError) { @view.collaborative_rich_text_area(@form, :title) }

    unpersisted = FakeForm.new(Post.new)

    assert_raises(ArgumentError) { @view.collaborative_rich_text_area(unpersisted, :body) }
  end
end
