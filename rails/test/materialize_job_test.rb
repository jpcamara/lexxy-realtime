# frozen_string_literal: true

require "test_helper"
require "lexxy_realtime/version"
require_relative "../app/jobs/lexxy_realtime/materialize_job"

class MaterializeJobTest < Minitest::Test
  def setup
    LexxyRealtime::Update.delete_all
    LexxyRealtime.store_name = nil
    @post = Post.create!(title: "Doc")
  end

  def test_perform_materializes_the_field
    LexxyRealtime::Update.append(@post.collaborative_document_key(:body), lexxy_full_state)

    LexxyRealtime::MaterializeJob.perform_now(@post, "body")

    assert_equal lexxy_full_html, @post.reload.body
  end

  def test_perform_with_no_document_is_a_no_op
    LexxyRealtime::MaterializeJob.perform_now(@post, "body")

    assert_nil @post.reload.body
  end
end
