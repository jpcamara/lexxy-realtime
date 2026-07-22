# frozen_string_literal: true

require "test_helper"
require_relative "fixtures/yjs_fixtures"

# The log behavior (compaction, the pending-gap guard, scoping) is yrby's
# Y::ActionCable::UpdateLog and is tested there; these pin the binding —
# the module is included, wired to the right table, and works end to end.
class UpdateTest < Minitest::Test
  def setup
    LexxyRealtime::Update.delete_all
    LexxyRealtime::Update.compact_every = 500
  end

  def test_runs_yrbys_update_log
    assert_includes LexxyRealtime::Update.included_modules, Y::ActionCable::UpdateLog
    assert_equal "lexxy_realtime_updates", LexxyRealtime::Update.table_name
  end

  def test_append_then_load_round_trips_through_the_table
    LexxyRealtime::Update.append("k", YjsFixtures::TwoDocsMerged::DOC1_UPDATE)
    LexxyRealtime::Update.append("k", YjsFixtures::TwoDocsMerged::DOC2_UPDATE)

    doc = Y::Doc.new
    doc.apply_update(LexxyRealtime::Update.load("k"))

    assert_equal "from doc1from doc2", doc.read_text("content")
  end

  def test_threshold_compaction_collapses_rows
    LexxyRealtime::Update.compact_every = 2
    LexxyRealtime::Update.append("k", YjsFixtures::TwoDocsMerged::DOC1_UPDATE)
    LexxyRealtime::Update.append("k", YjsFixtures::TwoDocsMerged::DOC2_UPDATE)

    assert_equal 1, LexxyRealtime::Update.where(document_key: "k").count
  end
end
