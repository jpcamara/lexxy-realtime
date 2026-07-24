# frozen_string_literal: true

require "test_helper"
require_relative "fixtures/yjs_fixtures"

# The log behavior (compaction, the pending-gap guard, scoping) is yrby's
# Y::UpdateLog and is tested there; these pin the binding — the module is
# included, keyed by document_id, and works end to end through the table.
class UpdateTest < Minitest::Test
  def setup
    LexxyRealtime::Update.delete_all
    LexxyRealtime::Document.delete_all
    LexxyRealtime::Update.compact_every = 500
    @doc_id = Post.create!(title: "Doc").collaborative_document!(:body).id
  end

  def test_runs_yrbys_update_log_keyed_by_document
    assert_includes LexxyRealtime::Update.included_modules, Y::UpdateLog
    assert_equal "lexxy_realtime_updates", LexxyRealtime::Update.table_name
    assert_equal :document_id, LexxyRealtime::Update.key_column
    assert_equal :document, LexxyRealtime::Update.reflect_on_association(:document).name
  end

  def test_append_then_load_round_trips_through_the_table
    LexxyRealtime::Update.append(@doc_id, YjsFixtures::TwoDocsMerged::DOC1_UPDATE)
    LexxyRealtime::Update.append(@doc_id, YjsFixtures::TwoDocsMerged::DOC2_UPDATE)

    doc = Y::Doc.new
    doc.apply_update(LexxyRealtime::Update.load(@doc_id))

    assert_equal "from doc1from doc2", doc.read_text("content")
  end

  def test_threshold_compaction_collapses_rows
    LexxyRealtime::Update.compact_every = 2
    LexxyRealtime::Update.append(@doc_id, YjsFixtures::TwoDocsMerged::DOC1_UPDATE)
    LexxyRealtime::Update.append(@doc_id, YjsFixtures::TwoDocsMerged::DOC2_UPDATE)

    assert_equal 1, LexxyRealtime::Update.where(document_id: @doc_id).count
  end
end
