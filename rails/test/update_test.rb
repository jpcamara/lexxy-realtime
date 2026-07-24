# frozen_string_literal: true

require "test_helper"

# Storage is yrby's (Y::Document + Y::DocumentUpdate, tested in yrby); these
# pin the binding: the default store and the macro's document wiring.
class UpdateTest < Minitest::Test
  def setup
    Y::DocumentUpdate.delete_all
    Y::Document.delete_all
    LexxyRealtime.store_name = nil
  end

  def test_the_default_store_is_yrbys_update_log
    assert_equal Y::DocumentUpdate, LexxyRealtime.store
    assert_equal :document_id, Y::DocumentUpdate.key_column
  end

  def test_the_macro_binds_documents_with_a_deterministic_key
    post = Post.create!(title: "Doc")
    document = post.collaborative_document!(:body)

    assert_equal "post/#{post.id}/body", document.key
    assert_equal post, document.record
    assert_equal "body", document.name
  end
end
