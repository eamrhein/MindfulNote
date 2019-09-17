# == Schema Information
#
# Table name: notes
#
#  id          :bigint           not null, primary key
#  notebook_id :integer          not null
#  author_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  title       :string
#  body        :text
#

class Note < ApplicationRecord
  validates :notebook_id, :author_id, presence: true
  belongs_to :notebook

  belongs_to :author,
  foreign_key: :author_id,
  class_name: "User"

  has_many :taggings

  has_many :tags, through: :taggings

  def self.find_by_author(author_id)
    note = Note.find_by(author_id: author_id)
    note
  end
end
