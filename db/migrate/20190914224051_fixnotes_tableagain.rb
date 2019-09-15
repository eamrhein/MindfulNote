class FixnotesTableagain < ActiveRecord::Migration[5.2]
  def change
    remove_column :notes, :body
    add_column :notes, :body, :text
  end
end
