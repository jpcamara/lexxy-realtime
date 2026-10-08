# frozen_string_literal: true

require "base64"

# Yjs updates captured from real clients. The README example tests load
# them as document state.
module YjsFixtures
  def self.b64(encoded) = Base64.strict_decode64(encoded)

  # Client 1 set content to "from doc1" and client 2 set it to "from doc2".
  module TwoDocsMerged
    DOC1_UPDATE = YjsFixtures.b64("AQEBAAQBB2NvbnRlbnQJZnJvbSBkb2MxAA==")
    DOC2_UPDATE = YjsFixtures.b64("AQECAAQBB2NvbnRlbnQJZnJvbSBkb2MyAA==")
  end
end
