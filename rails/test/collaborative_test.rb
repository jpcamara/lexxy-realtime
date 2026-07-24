# frozen_string_literal: true

require "test_helper"

# A store that sneaks one extra update in between materialize's load and
# save — the exact convergence race: without the watermark the projection
# would be stamped newer than the sneaked update and everything would skip.
class SneakyStore
  class << self
    attr_accessor :sneak, :sneaked_update

    def latest_change_at(key) = LexxyRealtime::Update.latest_change_at(key)
    def append(key, update) = LexxyRealtime::Update.append(key, update)

    def load(key)
      LexxyRealtime::Update.load(key).tap do
        if sneak
          self.sneak = false
          LexxyRealtime::Update.append(key, sneaked_update)
        end
      end
    end
  end
end

class CollaborativeTest < Minitest::Test
  def setup
    LexxyRealtime::Update.delete_all
    LexxyRealtime::Document.delete_all
    LexxyRealtime.store_name = nil
    @post = Post.create!(title: "Doc")
    @document = @post.collaborative_document!(:body)
  end

  def append(state, record = nil)
    doc = record ? record.collaborative_document!(:body) : @document
    LexxyRealtime::Update.append(doc.id, state)
  end

  def test_models_without_the_macro_get_no_instance_api
    bare = Class.new(ActiveRecord::Base) do
      self.table_name = "posts"
      include LexxyRealtime::Collaborative
    end

    assert_respond_to bare, :has_collaborative_rich_text, "the macro is available"
    refute bare.method_defined?(:collaborative_document!), "instance API arrives only with a declaration"
    refute bare.method_defined?(:materialize_collaborative_rich_text!)
  end

  def test_generated_reader_lives_in_a_named_module
    assert Post.const_defined?(:CollaborativeRichTextMethods)
    assert_includes Post.ancestors.map(&:name), "Post::CollaborativeRichTextMethods"
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
    assert_equal @document, @post.collaborative_document!(:body), "created once, found after"
  end

  def test_distinct_classes_get_distinct_documents_and_sti_shares
    # A genuinely different class over the same table: its own record_type,
    # its own document — the isolation string keys used to hand-encode.
    other_class = Class.new(ActiveRecord::Base) do
      self.table_name = "posts"
      include LexxyRealtime::Collaborative

      def self.name = "Blog::Post"
      def self.has_rich_text(name, **); end
      has_collaborative_rich_text :body
    end

    refute_equal @document, other_class.find(@post.id).collaborative_document!(:body)

    # An STI subclass shares the base class record_type — and therefore the
    # document — which is the correct Rails semantics (the old string keys
    # wrongly split one record's document by subclass name).
    sti = Class.new(Post) { def self.name = "FeaturedPost" }

    assert_equal @document, sti.find(@post.id).collaborative_document!(:body)
  end

  def test_destroying_the_record_sweeps_document_and_log
    append(lexxy_full_state)
    @post.destroy!

    assert_equal 0, LexxyRealtime::Document.count
    assert_equal 0, LexxyRealtime::Update.count, "the log follows the record's lifecycle"
  end

  def test_plain_model_without_action_text_materializes_into_the_attribute
    plain = PlainPost.find(@post.id)
    LexxyRealtime::Update.append(plain.collaborative_document!(:body).id, lexxy_full_state)

    assert_equal lexxy_full_html, plain.body, "read materializes into the plain column"
  end

  def test_materialize_raises_for_a_non_collaborative_attribute
    assert_raises(ArgumentError) { @post.materialize_collaborative_rich_text!(:title) }
  end

  def test_materialize_is_false_with_no_recorded_document
    refute @post.materialize_collaborative_rich_text!(:body)
    assert_nil @post.reload.body
  end

  def test_materialize_renders_the_document_to_html_and_saves
    append(lexxy_full_state)

    assert @post.materialize_collaborative_rich_text!(:body)
    # Byte-identical to the Lexxy editor's own serialization of the same
    # session (the fixture pair is captured from a real editor).
    assert_equal lexxy_full_html, @post.reload.body
  end

  def test_reading_the_attribute_materializes_when_stale
    # Simulates leaving the editor for the show page inside the debounce
    # window: updates are recorded but no job has run. A plain read must
    # return the collaborative state, not the stale column.
    append(lexxy_full_state)

    assert_equal lexxy_full_html, @post.body, "a plain read returned the latest state"
  end

  def test_reading_when_fresh_does_not_rematerialize
    append(lexxy_full_state)
    @post.body # first read materializes
    materialized_at = @post.reload.updated_at

    @post.body

    assert_equal materialized_at, @post.reload.updated_at,
                 "a fresh read performs no render and no save"
  end

  def test_reading_after_a_new_update_refreshes_again
    append(lexxy_full_state)
    @post.body
    first_at = @document.reload.materialized_at

    append(lexxy_full_state) # redelivery: newer log row

    @post.body

    assert_operator @document.reload.materialized_at, :>=, first_at, "the newer log row triggered a refresh"
  end

  def test_an_update_landing_mid_materialization_still_converges
    append(lexxy_full_state)
    LexxyRealtime.store_name = "SneakyStore"
    SneakyStore.sneaked_update = lexxy_full_state
    SneakyStore.sneak = true

    assert @post.materialize_collaborative_rich_text!(:body)
    refute_nil @document.reload.materialized_at, "the watermark lives on our document"
    assert_equal :stale, @post.collaborative_rich_text_freshness(:body),
                 "the mid-render update must read as newer than the projection"
    assert @post.materialize_collaborative_rich_text!(:body), "the sneaked update's own job converges"
    assert_equal :fresh, @post.collaborative_rich_text_freshness(:body)
  end

  def test_reading_under_write_contention_serves_the_current_value
    append(lexxy_full_state)
    @post.body # materialize once so a stale-but-present value exists
    append(lexxy_full_state)

    # The lock is busy (peers typing): the read must not raise, and must
    # return the last materialized value instead of failing the page.
    @post.define_singleton_method(:materialize_collaborative_rich_text!) do |_name|
      raise ActiveRecord::LockWaitTimeout
    end

    assert_equal lexxy_full_html, @post.body
  end

  def test_reading_through_a_dirty_instance_serves_the_current_value
    append(lexxy_full_state)
    @post.body # materialize a first value
    @post.title = "edited but unsaved" # a form assignment in flight

    assert_equal lexxy_full_html, @post.body, "read works on a dirty instance"
    assert_equal "edited but unsaved", @post.title, "the dirty change was not committed"
    refute_equal "edited but unsaved", @post.reload.title
  end

  def test_reading_with_no_document_reads_the_column_untouched
    @post.update!(body: "<p>manual</p>")
    before = @post.reload.updated_at

    assert_equal "<p>manual</p>", @post.body
    assert_equal before, @post.reload.updated_at
  end

  def test_materialize_saves_past_unrelated_model_validations
    # The projection is system-written content the collaboration flow already
    # accepted; an unrelated validation (here: one this record currently
    # fails) must not block it — nor 500 a read that triggers it.
    invalid = Class.new(Post) do
      def self.name = "Post"
      validates :title, absence: true
    end
    record = invalid.find(@post.id)

    refute_predicate record, :valid?
    LexxyRealtime::Update.append(record.collaborative_document!(:body).id, lexxy_full_state)

    assert record.materialize_collaborative_rich_text!(:body)
    assert_equal lexxy_full_html, record.reload.body
  end

  def test_materialize_is_idempotent
    append(lexxy_full_state)
    @post.materialize_collaborative_rich_text!(:body)
    first = @post.reload.body

    assert @post.materialize_collaborative_rich_text!(:body)
    assert_equal first, @post.reload.body
  end
end
