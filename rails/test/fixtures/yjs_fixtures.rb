# frozen_string_literal: true

require "base64"

# Captured Y.js updates used to test the Ruby reader with real client
# data.
module YjsFixtures
  def self.b64(encoded) = Base64.strict_decode64(encoded)

  # doc1 (client 1): content = "from doc1"; doc2 (client 2): content = "from doc2"
  module TwoDocsMerged
    DOC1_UPDATE = YjsFixtures.b64("AQEBAAQBB2NvbnRlbnQJZnJvbSBkb2MxAA==")
    DOC2_UPDATE = YjsFixtures.b64("AQECAAQBB2NvbnRlbnQJZnJvbSBkb2MyAA==")
  end
end
