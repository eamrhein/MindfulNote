class Fixtagnames < ActiveRecord::Migration[5.2]
  def change
    remove_column :tags, :tag_name
    add_column :tags, :name, :string
  end
end
