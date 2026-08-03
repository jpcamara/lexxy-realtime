# frozen_string_literal: true

require "test_helper"
require "lexxy_realtime/version"
require_relative "../app/jobs/lexxy_realtime/materialize_job"

class MaterializeJobTest < Minitest::Test
  def setup
    Y::DocumentUpdate.delete_all
    Y::Document.delete_all
    @post = Post.create!(title: "Doc")
    @document = @post.collaborative_document!(:body)
  end

  def test_perform_materializes_the_field
    @document.append(lexxy_full_state)

    LexxyRealtime::MaterializeJob.perform_now(@post, "body")

    assert_equal lexxy_full_html, @post.reload.body
  end

  def test_perform_skips_the_render_when_already_fresh
    @document.append(lexxy_full_state)
    LexxyRealtime::MaterializeJob.perform_now(@post, "body")
    done_at = @document.reload.materialized_at

    LexxyRealtime::MaterializeJob.perform_now(@post, "body")

    assert_equal done_at, @document.reload.materialized_at, "no render, no stamp on the redundant job"
  end

  def test_perform_with_no_document_is_a_no_op
    LexxyRealtime::MaterializeJob.perform_now(@post, "body")

    assert_nil @post.reload.body
  end

  def test_later_schedules_the_delayed_job
    previous_adapter = ActiveJob::Base.queue_adapter
    ActiveJob::Base.queue_adapter = :test

    @post.materialize_collaborative_rich_text_later(:body)

    job = ActiveJob::Base.queue_adapter.enqueued_jobs.first

    assert_equal LexxyRealtime::MaterializeJob, job[:job]
    assert job[:at], "scheduled with the materialize_after delay, not immediate"
  ensure
    ActiveJob::Base.queue_adapter = previous_adapter
  end

  def test_later_rejects_a_non_collaborative_attribute
    assert_raises(ArgumentError) { @post.materialize_collaborative_rich_text_later(:title) }
  end

  def test_later_falls_back_when_the_adapter_cannot_schedule
    previous_adapter = ActiveJob::Base.queue_adapter
    ActiveJob::Base.queue_adapter = :inline # enqueue_at raises NotImplementedError

    @post.materialize_collaborative_rich_text_later(:body)

    assert_nil @post.reload.body, "ran inline against an empty log; the point is it didn't raise"
  ensure
    ActiveJob::Base.queue_adapter = previous_adapter
  end
end
