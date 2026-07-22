# frozen_string_literal: true

require "test_helper"

class CollaborativeTest < Minitest::Test
  def setup
    LexxyRealtime::Update.delete_all
    LexxyRealtime.store_name = nil
    @post = Post.create!(title: "Doc")
  end

  def test_macro_registers_the_attribute
    assert_equal [:body], Post.collaborative_rich_text_names
    assert @post.collaborative_rich_text?(:body)
    assert @post.collaborative_rich_text?("body")
    refute @post.collaborative_rich_text?(:title)
  end

  def test_document_key_is_stable_and_scoped
    assert_equal "post/#{@post.id}/body", @post.collaborative_document_key(:body)
  end

  def test_materialize_raises_for_a_non_collaborative_attribute
    assert_raises(ArgumentError) { @post.materialize_collaborative_rich_text!(:title) }
  end

  def test_materialize_is_false_with_no_recorded_document
    refute @post.materialize_collaborative_rich_text!(:body)
    assert_nil @post.reload.body
  end

  def test_materialize_renders_the_document_to_html_and_saves
    LexxyRealtime::Update.append(@post.collaborative_document_key(:body), lexxy_full_state)

    assert @post.materialize_collaborative_rich_text!(:body)
    # Byte-identical to the Lexxy editor's own serialization of the same
    # session (the fixture pair is captured from a real editor).
    assert_equal lexxy_full_html, @post.reload.body
  end

  def test_materialize_never_replaces_present_content_with_a_blank_render
    # A pre-collaboration body exists; the collaborative doc holds only the
    # empty bootstrap (renders no text). Materializing must not destroy the
    # stored content.
    @post.update!(body: "<p>existing content</p>")
    empty_doc = Y::Doc.new
    LexxyRealtime::Update.append(@post.collaborative_document_key(:body), empty_doc.encode_state_as_update)

    refute @post.materialize_collaborative_rich_text!(:body)
    assert_equal "<p>existing content</p>", @post.reload.body
  end

  def test_materialize_is_idempotent
    LexxyRealtime::Update.append(@post.collaborative_document_key(:body), lexxy_full_state)
    @post.materialize_collaborative_rich_text!(:body)
    first = @post.reload.body

    assert @post.materialize_collaborative_rich_text!(:body)
    assert_equal first, @post.reload.body
  end
end
