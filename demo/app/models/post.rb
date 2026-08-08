class Post < ApplicationRecord
  has_collaborative_rich_text :body
  # Encrypts the rendered rich text (ActionText::EncryptedRichText) and
  # the collaborative document (Y::EncryptedDocument), so notes are
  # ciphertext at rest.
  has_collaborative_rich_text :notes, encrypted: true

  validates :title, presence: true
end
