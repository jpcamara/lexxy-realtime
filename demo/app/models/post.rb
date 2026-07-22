class Post < ApplicationRecord
  has_collaborative_rich_text :body

  validates :title, presence: true
end
