# == Schema Information
#
# Table name: notebooks
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Notebook < ApplicationRecord
  has_many :notes

  belongs_to :author,
  foreign_key: :author_id,
  class_name: "User"

  def self.find_by_author(author_id)
    notebook = Notebook.find_by(author_id: author_id)
    notebook
  end

end
