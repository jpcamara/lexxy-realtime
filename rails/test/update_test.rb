# frozen_string_literal: true

require "test_helper"
require_relative "fixtures/yjs_fixtures"

class UpdateTest < Minitest::Test
  CLIENT_ONE = YjsFixtures::TwoDocsMerged::DOC1_UPDATE
  CLIENT_TWO = YjsFixtures::TwoDocsMerged::DOC2_UPDATE

  def setup
    LexxyRealtime::Update.delete_all
    LexxyRealtime::Update.compact_every = 500
  end

  def read_back(key)
    doc = Y::Doc.new
    doc.apply_update(LexxyRealtime::Update.load(key))
    doc.read_text("content")
  end

  def test_load_returns_nil_for_an_unknown_document
    assert_nil LexxyRealtime::Update.load("nope")
  end

  def test_append_then_load_merges_concurrent_updates
    LexxyRealtime::Update.append("k", CLIENT_ONE)
    LexxyRealtime::Update.append("k", CLIENT_TWO)

    assert_equal "from doc1from doc2", read_back("k")
  end

  def test_append_triggers_compaction_at_the_threshold
    LexxyRealtime::Update.compact_every = 2
    LexxyRealtime::Update.append("k", CLIENT_ONE)
    LexxyRealtime::Update.append("k", CLIENT_TWO)

    assert_equal 1, LexxyRealtime::Update.where(document_key: "k").count
    assert_equal "from doc1from doc2", read_back("k")
  end

  def test_compaction_scopes_to_one_document
    LexxyRealtime::Update.append("a", CLIENT_ONE)
    LexxyRealtime::Update.append("b", CLIENT_ONE)
    LexxyRealtime::Update.append("b", CLIENT_TWO)

    LexxyRealtime::Update.compact!("b")

    assert_equal 1, LexxyRealtime::Update.where(document_key: "a").count
    assert_equal 1, LexxyRealtime::Update.where(document_key: "b").count
  end

  def test_compaction_skips_a_document_with_a_pending_gap
    # A stored gappy update, redelivered once: the snapshot would exclude the
    # pending struct, so compacting would delete the only copy of a gap that
    # could still heal. Rows must survive until the dependency arrives.
    LexxyRealtime::Update.append("k", YjsFixtures::Gap::DEPENDENT)
    LexxyRealtime::Update.append("k", YjsFixtures::Gap::DEPENDENT)

    LexxyRealtime::Update.compact!("k")

    assert_equal 2, LexxyRealtime::Update.where(document_key: "k").count

    LexxyRealtime::Update.append("k", YjsFixtures::Gap::FIRST)
    LexxyRealtime::Update.compact!("k")

    assert_equal 1, LexxyRealtime::Update.where(document_key: "k").count
    healed = Y::Doc.new
    healed.apply_update(LexxyRealtime::Update.load("k"))

    assert_equal "ab", healed.read_text("notepad")
  end
end
