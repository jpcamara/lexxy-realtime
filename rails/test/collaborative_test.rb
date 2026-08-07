# frozen_string_literal: true

require "test_helper"

class CollaborativeTest < Minitest::Test
  def setup
    Y::DocumentUpdate.delete_all
    Y::Document.delete_all
    @post = Post.create!(title: "Doc")
    @document = @post.find_or_create_collaborative_document(:body)
  end

  # Append by document key, then reload the cached document so tests see
  # the updated changed_at value.
  def append(state, record = nil)
    doc = record ? record.find_or_create_collaborative_document(:body) : @document
    Y::Document.append(doc.key, state)
    doc.reload
  end

  def test_models_without_the_macro_get_no_instance_api
    bare = Class.new(ActiveRecord::Base) do
      self.table_name = "posts"
      include LexxyRealtime::Collaborative
    end

    assert_respond_to bare, :has_collaborative_rich_text, "the macro is available"
    refute bare.method_defined?(:find_or_create_collaborative_document), "instance API arrives only with a declaration"
    refute bare.method_defined?(:refresh_collaborative_rich_text)
  end

  def test_encrypted_option_is_rejected
    klass = Class.new(ActiveRecord::Base) do
      self.table_name = "posts"
      include LexxyRealtime::Collaborative

      def self.has_rich_text(name, **); end
    end

    assert_raises(ArgumentError) { klass.has_collaborative_rich_text(:body, encrypted: true) }
  end

  def test_macro_registers_the_attribute
    assert_equal [:body], Post.collaborative_rich_text_names
    assert @post.collaborative_rich_text?(:body)
    assert @post.collaborative_rich_text?("body")
    refute @post.collaborative_rich_text?(:title)
  end

  def test_document_is_the_action_text_shape
    assert_equal @post, @document.record
    assert_equal "body", @document.name
    assert_equal @document, @post.collaborative_document_body, "has_one, like rich_text_body"
    assert_equal @document, @post.find_or_create_collaborative_document(:body), "created once, found after"
  end

  def test_distinct_classes_get_distinct_documents_and_sti_shares
    # A separate model class on the same table gets a separate document.
    other_class = Class.new(ActiveRecord::Base) do
      self.table_name = "posts"
      include LexxyRealtime::Collaborative

      def self.name = "Blog::Post"
      def self.has_rich_text(name, **); end
      has_collaborative_rich_text :body
    end

    refute_equal @document, other_class.find(@post.id).find_or_create_collaborative_document(:body)

    # STI subclasses use the base class record_type, so they share the
    # document.
    sti = Class.new(Post) { def self.name = "FeaturedPost" }

    assert_equal @document, sti.find(@post.id).find_or_create_collaborative_document(:body)
  end

  def test_destroying_the_record_sweeps_document_and_log
    append(lexxy_full_state)
    @post.destroy!

    assert_equal 0, Y::Document.count
    assert_equal 0, Y::DocumentUpdate.count, "the log follows the record's lifecycle"
  end

  def test_plain_model_without_action_text_materializes_into_the_attribute
    plain = PlainPost.find(@post.id)
    append(lexxy_full_state, plain)

    assert plain.refresh_collaborative_rich_text(:body)
    assert_equal lexxy_full_html, plain.reload.body, "rendered into the plain column"
  end

  def test_materialize_raises_for_a_non_collaborative_attribute
    assert_raises(ArgumentError) { @post.refresh_collaborative_rich_text(:title) }
  end

  def test_materialize_is_false_with_no_recorded_document
    refute @post.refresh_collaborative_rich_text(:body)
    assert_nil @post.reload.body
  end

  def test_materialize_renders_the_document_to_html_and_saves
    append(lexxy_full_state)

    assert @post.refresh_collaborative_rich_text(:body)
    # Byte-identical to the Lexxy editor's own serialization of the same
    # session (the fixture pair is captured from a real editor).
    assert_equal lexxy_full_html, @post.reload.body
  end

  def test_materialize_saves_past_unrelated_model_validations
    # Materializing collaboration updates bypasses unrelated model
    # validations.
    invalid = Class.new(Post) do
      def self.name = "Post"
      validates :title, absence: true
    end
    record = invalid.find(@post.id)

    refute_predicate record, :valid?
    append(lexxy_full_state, record)

    assert record.refresh_collaborative_rich_text(:body)
    assert_equal lexxy_full_html, record.reload.body
  end

  def test_materialize_is_idempotent
    append(lexxy_full_state)
    @post.refresh_collaborative_rich_text(:body)
    first = @post.reload.body

    assert @post.refresh_collaborative_rich_text(:body)
    assert_equal first, @post.reload.body
  end
end
