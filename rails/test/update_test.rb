# frozen_string_literal: true

require "test_helper"

# These tests cover the gem's Y::Document association and the calls made
# by DocumentChannel.
class UpdateTest < Minitest::Test
  def setup
    Y::DocumentUpdate.delete_all
    Y::Document.delete_all
  end

  def test_the_macro_binds_documents_with_a_deterministic_key
    post = Post.create!(title: "Doc")
    document = post.collaborative_document!(:body)

    assert_equal "post/#{post.id}/body", document.key
    assert_equal post, document.record
    assert_equal "body", document.name
  end

  def test_channel_appends_by_key_reach_the_bound_document
    post = Post.create!(title: "Doc")
    document = post.collaborative_document!(:body)

    Y::Document.append(document.key, lexxy_full_state)

    # Compare rendered HTML because re-encoding a Yjs map can change byte
    # order without changing its content.
    served = Y::Doc.new.tap { |d| d.apply_update(Y::Document.load_state(document.key)) }

    assert_equal lexxy_full_html, Y::Lexxy.new(served).to_html
  end
end
