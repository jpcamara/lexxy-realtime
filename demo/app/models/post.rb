class Post < ApplicationRecord
  # Render rules for the custom Lexical nodes the demo editors register
  # (app/javascript/custom_nodes/index.js). Y::Lexxy applies them when the
  # document materializes into the attribute. Without the "mark" rule,
  # @lexical/mark's MarkNode is an unknown element node: the marked text
  # survives in the stored HTML, but its <mark> wrapper is lost -- while
  # both live editors keep showing it.
  #
  # There is no rule for @lexical/hashtag: a HashtagNode is a TextNode
  # subclass, which syncs as a plain text run and materializes as its
  # text (rules can't target text runs; see the demo README).
  CUSTOM_NODES = {
    "mark" => { tag: "mark", attrs: { "class" => "comment-mark" } }
  }.freeze

  has_collaborative_rich_text :body, nodes: CUSTOM_NODES
  # Encrypts the rendered rich text (ActionText::EncryptedRichText) and
  # the collaborative document (Y::EncryptedDocument), so notes are
  # ciphertext at rest.
  has_collaborative_rich_text :notes, encrypted: true, nodes: CUSTOM_NODES

  validates :title, presence: true
end
