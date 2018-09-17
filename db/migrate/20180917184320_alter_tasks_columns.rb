class AlterTasksColumns < ActiveRecord::Migration[5.1]
  def change
    add_column :tasks, :section_id, :integer
    add_column :tasks, :isSection, :boolean
    add_index :tasks, :section_id
  end
end
