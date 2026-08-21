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

  # A Post whose attribute is declared encrypted. Subclassing keeps the
  # writer-fidelity shim and record_type ("Post"), so keys and adoption
  # behave exactly as the plain class.
  def encrypted_post_class
    Class.new(Post) do
      def self.name = "Post"
      has_collaborative_rich_text :body, encrypted: true
    end
  end

  def test_encrypted_attribute_wires_the_encrypted_document_class
    klass = encrypted_post_class

    assert_equal Y::EncryptedDocument,
                 klass.reflect_on_association(:collaborative_document_body).klass
    record = klass.create!

    assert_instance_of Y::EncryptedDocument, record.find_or_create_collaborative_document(:body)
  end

  def test_encrypted_attribute_materializes_and_stores_ciphertext
    record = encrypted_post_class.create!
    document = record.find_or_create_collaborative_document(:body)
    document.append(lexxy_full_state)

    assert record.refresh_collaborative_rich_text(:body)
    assert_equal lexxy_full_html, record.reload.body, "rendering is unchanged by encryption"

    raw = Y::Document.connection.select_value(
      "SELECT payload FROM y_document_updates WHERE document_id = #{document.id} LIMIT 1"
    )

    assert_includes raw, '"p":', "payload rows hold the Active Record encryption envelope"
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

  # Stand-ins for Y::Lexxy: current yrby reports unknown node types; an
  # older yrby has no unknown_types and reporting stays silent.
  ReportingRenderer = Data.define(:html, :types) do
    def to_html = html
    def unknown_types = types
  end

  LegacyRenderer = Data.define(:html) do
    def to_html = html
  end

  # Materialize with Y::Lexxy.new swapped for a stand-in renderer.
  def with_renderer(renderer)
    Y::Lexxy.singleton_class.alias_method :__real_new, :new
    Y::Lexxy.define_singleton_method(:new) { |*, **| renderer }
    yield
  ensure
    Y::Lexxy.singleton_class.alias_method :new, :__real_new
    Y::Lexxy.singleton_class.remove_method :__real_new
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

  def test_materialize_warns_once_about_unknown_node_types
    append(lexxy_full_state)
    renderer = ReportingRenderer.new(html: "<p>x</p>", types: ["poll"])

    log = capture_log do
      with_renderer(renderer) do
        assert @post.refresh_collaborative_rich_text(:body)
        assert @post.refresh_collaborative_rich_text(:body)
      end
    end

    assert_equal 1, log.scan("no Y::Lexxy render rule").length,
                 "one warning per class/field/type set, not per materialization"
    assert_includes log, "poll"
    assert_equal "<p>x</p>", @post.reload.body, "the warning is advisory; materialization proceeds"
  end

  def test_materialize_stays_silent_when_yrby_cannot_report
    append(lexxy_full_state)
    renderer = LegacyRenderer.new(html: "<p>x</p>")

    log = capture_log do
      with_renderer(renderer) do
        assert @post.refresh_collaborative_rich_text(:body)
      end
    end

    refute_includes log, "render rule"
    assert_equal "<p>x</p>", @post.reload.body
  end

  def test_macro_rules_reach_materialization
    klass = Class.new(Post) do
      def self.name = "Post"
      has_collaborative_rich_text :body, nodes: { "paragraph" => { tag: "section" } }
    end
    record = klass.find(@post.id)
    append(lexxy_full_state, record)

    assert record.refresh_collaborative_rich_text(:body)
    assert_includes record.reload.body, "<section>", "the field's rules apply to the materialized render"
  end
end
