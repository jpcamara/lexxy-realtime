class Post < ApplicationRecord
  # Render rules for the custom nodes in app/javascript/custom_nodes/index.js.
  # Without the "mark" rule, the stored HTML keeps the marked text but drops
  # the <mark> tag. Hashtags sync as plain text runs, which rules can't
  # target, so they have no rule.
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
