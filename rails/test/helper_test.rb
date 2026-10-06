# frozen_string_literal: true

require "test_helper"
require "action_view"
require "json"

class HelperTest < Minitest::Test
  include ActiveSupport::Testing::TimeHelpers

  # A view context with real tag helpers. The tests use Action View's
  # FormBuilder and stub Lexxy's editor method so it renders the block's
  # content inside the editor tag.
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

  ActionView::Helpers::FormBuilder.prepend(LexxyRealtime::FormBuilder) # the engine does this at boot

  def setup
    @post = Post.create!(title: "Doc")
    @view = FakeView.new(FakeUser.new("Ada"))
    @form = ActionView::Helpers::FormBuilder.new("post", @post, @view, {})
    @form.define_singleton_method(:lexxy_rich_textarea) do |method, _options = {}, &block|
      %(<lexxy-editor name="post[#{method}]">#{block.call}</lexxy-editor>).html_safe
    end
  end

  def locate(grant, field)
    GlobalID::Locator.locate_signed(grant, for: LexxyRealtime.grant_purpose(field))
  end

  def element_attributes(html, tag = "lexxy-collaboration")
    fragment = html[/<#{tag}[^>]*>/]
    fragment.scan(/([\w-]+)="([^"]*)"/).to_h.transform_values { |v| CGI.unescapeHTML(v) }
  end

  def document_attributes(html) = element_attributes(html, "yrby-document")

  def test_renders_the_editor_inside_a_yrby_document
    html = @form.collaborative_rich_textarea(:body)

    editor = %r{<lexxy-editor[^>]*><lexxy-collaboration.*</lexxy-collaboration></lexxy-editor>}

    assert_match(%r{\A<yrby-document[^>]*>#{editor}</yrby-document>\z}, html)
    assert_equal html, @form.collaborative_rich_text_area(:body), "underscore alias"
  end

  def test_falls_back_to_rich_text_area_when_lexxy_helper_is_absent
    @form.singleton_class.undef_method(:lexxy_rich_textarea)
    @form.define_singleton_method(:rich_text_area) do |method, _options = {}, &block|
      %(<lexxy-editor name="post[#{method}]">#{block.call}</lexxy-editor>).html_safe
    end

    html = @form.collaborative_rich_textarea(:body)

    assert_includes html, "<lexxy-collaboration", "renders through rich_text_area"
  end

  def test_wires_the_elements_to_the_record
    html = @form.collaborative_rich_textarea(:body)
    attrs = element_attributes(html)
    document = document_attributes(html)

    assert_equal "post-#{@post.id}-body", attrs["doc-id"]
    assert_equal "Ada", attrs["name"]
    assert_equal %w[color doc-id name], attrs.keys.sort, "the collaboration element only carries identity"

    assert_equal "LexxyRealtime::DocumentChannel", document["channel"]
    assert_equal "body", document["name"]
    assert_nil document["refresh"]
    assert_equal @post, locate(document["grant"], :body), "the grant is a signed GlobalID for this record and field"
    assert_nil Y::Collaborative.locate(document["grant"], :body), "yrby-rails' channel must not accept it"
  end

  def test_uses_the_configured_channel_name
    LexxyRealtime.channel_name = "CustomDocumentChannel"

    assert_equal "CustomDocumentChannel", document_attributes(@form.collaborative_rich_textarea(:body))["channel"]
  ensure
    LexxyRealtime.channel_name = nil
  end

  def test_grant_is_field_scoped
    grant = document_attributes(@form.collaborative_rich_textarea(:body))["grant"]

    assert_nil locate(grant, :internal_notes), "a grant for one collaborative field must not open another"
  end

  def test_expires_in_limits_the_grant
    grant = document_attributes(@form.collaborative_rich_textarea(:body, expires_in: 1.second))["grant"]

    travel_to(2.seconds.from_now) do
      assert_nil locate(grant, :body), "an expired grant locates nothing"
    end
  end

  def test_refresh_renders_the_refresh_url
    document = document_attributes(@form.collaborative_rich_textarea(:body, refresh: "/posts/1/grant"))

    assert_equal "/posts/1/grant", document["refresh"]
  end

  def test_collaborative_rich_text_grant_matches_the_helper
    grant = @post.collaborative_rich_text_grant(:body, expires_in: 1.minute)

    assert_equal @post, locate(grant, :body)
    assert_nil Y::Collaborative.locate(grant, :body)
    travel_to(2.minutes.from_now) do
      assert_nil locate(grant, :body), "expires_in applies"
    end
    assert_raises(ArgumentError) { @post.collaborative_rich_text_grant(:title) }
  end

  def test_identity_overrides_and_stable_color
    attrs = element_attributes(@form.collaborative_rich_textarea(:body, name: "Grace", color: "#111111"))

    assert_equal "Grace", attrs["name"]
    assert_equal "#111111", attrs["color"]

    default = element_attributes(@form.collaborative_rich_textarea(:body))

    assert_equal default["color"], element_attributes(@form.collaborative_rich_textarea(:body))["color"],
                 "the same name gets the same derived color"
    assert_match(/\Ahsl\(\d+, 70%, 45%\)\z/, default["color"])
  end

  def test_rejects_non_collaborative_and_unpersisted_records
    assert_raises(ArgumentError) { @form.collaborative_rich_textarea(:title) }

    unpersisted = ActionView::Helpers::FormBuilder.new("post", Post.new, @view, {})

    assert_raises(ArgumentError) { unpersisted.collaborative_rich_textarea(:body) }
  end
end
