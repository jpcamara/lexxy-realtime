# frozen_string_literal: true

require "test_helper"

class CollaborativeTest < Minitest::Test
  def setup
    Y::DocumentUpdate.delete_all
    Y::Document.delete_all
    # The unknown-node warning is logged once per process. Clear what it
    # has seen so each test starts fresh.
    LexxyRealtime.instance_variable_get(:@unknown_types_seen).clear
    @post = Post.create!(title: "Doc")
  end

  # Append through the record's document, the way the channel does.
  def append(state, record = @post)
    record.collaborative_document(:body).append(state)
  end

  def document_row(record = @post) = record.collaborative_document(:body).document_row

  def test_models_without_the_macro_get_no_instance_api
    bare = Class.new(ActiveRecord::Base) do
      self.table_name = "posts"
      include LexxyRealtime::Collaborative
    end

    assert_respond_to bare, :has_collaborative_rich_text, "the macro is available"
    refute bare.method_defined?(:refresh_collaborative_rich_text), "the macro adds the instance API"
  end

  # A Post subclass with an encrypted body. It keeps Post's body= override
  # and its record_type of "Post", so document keys and row lookup match
  # the plain class.
  def encrypted_post_class
    Class.new(Post) do
      def self.name = "Post"
      has_collaborative_rich_text :body, encrypted: true
    end
  end

  def test_encrypted_attribute_uses_the_encrypted_document_class
    klass = encrypted_post_class

    assert_equal Y::EncryptedDocument, klass.collaborative_document_class(:body)
    assert_instance_of Y::EncryptedDocument, document_row(klass.create!)
  end

  def test_encrypted_attribute_materializes_and_stores_ciphertext
    record = encrypted_post_class.create!
    append(lexxy_full_state, record)

    assert record.refresh_collaborative_rich_text(:body)
    assert_equal lexxy_full_html, record.reload.body, "encryption doesn't change the rendered HTML"

    raw = Y::Document.connection.select_value(
      "SELECT payload FROM y_document_updates WHERE document_id = #{document_row(record).id} LIMIT 1"
    )

    assert_includes raw, '"p":', "the stored payload is an Active Record encryption envelope"
  end

  def test_macro_registers_the_attribute
    assert_equal [:body], Post.collaborative_rich_text_names
    assert @post.collaborative_rich_text?(:body)
    assert @post.collaborative_rich_text?("body")
    refute @post.collaborative_rich_text?(:title)
  end

  def test_document_row_is_bound_to_the_record_and_field
    row = document_row

    assert_equal @post, row.record
    assert_equal "body", row.name
    assert_equal row, document_row, "the second call finds the same row"
  end

  def test_each_model_class_gets_its_own_document_and_sti_subclasses_share
    # A separate model class on the same table gets a separate document.
    other_class = Class.new(ActiveRecord::Base) do
      self.table_name = "posts"
      include LexxyRealtime::Collaborative

      def self.name = "Blog::Post"
      def self.has_rich_text(name, **); end
      has_collaborative_rich_text :body
    end

    refute_equal document_row, document_row(other_class.find(@post.id))

    # STI subclasses use the base class record_type, so they share the
    # document.
    sti = Class.new(Post) { def self.name = "FeaturedPost" }

    assert_equal document_row, document_row(sti.find(@post.id))
  end

  def test_destroying_the_record_deletes_its_document_and_updates
    append(lexxy_full_state)
    @post.destroy!

    assert_equal 0, Y::Document.count
    assert_equal 0, Y::DocumentUpdate.count, "destroying the record deletes its stored updates"
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

  def test_materialize_returns_false_without_a_stored_document
    refute @post.refresh_collaborative_rich_text(:body)
    assert_nil @post.reload.body
  end

  def test_materialize_renders_the_document_to_html_and_saves
    append(lexxy_full_state)

    assert @post.refresh_collaborative_rich_text(:body)
    # Both fixtures were captured from the same Lexxy editor session, so
    # this checks that the render matches Lexxy's own HTML byte for byte.
    assert_equal lexxy_full_html, @post.reload.body
  end

  def test_materialize_saves_when_another_validation_fails
    # A failing validation on another attribute doesn't block saving the
    # rendered body.
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

  # Capture Rails.logger output for the duration of the block.
  def capture_log
    io = StringIO.new
    original = Rails.logger
    Rails.logger = Logger.new(io)
    yield
    io.string
  ensure
    Rails.logger = original
  end

  # A Post subclass with render rules for body, loaded from @post's row.
  def post_with_rules(nodes)
    klass = Class.new(Post) do
      def self.name = "Post"
      has_collaborative_rich_text :body, nodes:
    end
    klass.find(@post.id)
  end

  # custom_nodes.bin was captured from two demo editors. Its text is
  # "Collab #ruby rocks and #peer too", with "rocks" wrapped in an
  # @lexical/mark MarkNode. Hashtags are TextNode subclasses, so they sync
  # as plain text runs.
  def test_unknown_inline_node_keeps_its_text
    append(custom_nodes_state)

    log = capture_log { assert @post.refresh_collaborative_rich_text(:body) }

    body = @post.reload.body

    assert_includes body, "rocks"
    assert_includes body, "#ruby"
    refute_includes body, "<mark"
    assert_includes log, "no Y::Lexxy render rule: mark."
  end

  def test_unknown_node_warning_is_logged_once
    append(custom_nodes_state)

    log = capture_log do
      assert @post.refresh_collaborative_rich_text(:body)
      assert @post.refresh_collaborative_rich_text(:body)
    end

    assert_equal 1, log.scan("no Y::Lexxy render rule").length
  end

  def test_a_rule_renders_the_node_and_silences_the_warning
    record = post_with_rules("mark" => { tag: "mark", attrs: { "class" => "comment-mark" } })
    append(custom_nodes_state, record)

    log = capture_log { assert record.refresh_collaborative_rich_text(:body) }

    assert_includes record.reload.body, %(<mark class="comment-mark">rocks</mark>)
    refute_includes log, "render rule"
  end

  def test_macro_does_not_freeze_the_callers_rules
    rules = { "mark" => { tag: "mark" } }
    post_with_rules(rules)

    refute_predicate rules, :frozen?
  end

  def test_macro_rules_reach_materialization
    record = post_with_rules("paragraph" => { tag: "section" })
    append(lexxy_full_state, record)

    assert record.refresh_collaborative_rich_text(:body)
    assert_includes record.reload.body, "<section>", "the field's rules apply when rendering"
  end
end
