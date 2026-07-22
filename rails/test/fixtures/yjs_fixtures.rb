# frozen_string_literal: true

require "base64"

# Small captured-from-real-Y.js updates (the Doc is read-only from Ruby, so
# every "client edit" in tests is real update bytes).
module YjsFixtures
  def self.b64(encoded) = Base64.strict_decode64(encoded)

  # doc1 (client 1): content = "from doc1"; doc2 (client 2): content = "from doc2"
  module TwoDocsMerged
    DOC1_UPDATE = YjsFixtures.b64("AQEBAAQBB2NvbnRlbnQJZnJvbSBkb2MxAA==")
    DOC2_UPDATE = YjsFixtures.b64("AQECAAQBB2NvbnRlbnQJZnJvbSBkb2MyAA==")
  end

  # A causal gap as two deltas: FIRST inserts "a" (client 1); DEPENDENT
  # inserts "b" after it. Applied without FIRST, DEPENDENT parks as pending.
  module Gap
    FIRST = YjsFixtures.b64("AQEBAAQBB25vdGVwYWQBYQA=")
    DEPENDENT = YjsFixtures.b64("AQEBAYQBAAFiAA==")
  end
end
