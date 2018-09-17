class DropSectionTables < ActiveRecord::Migration[5.1]
  def change
    drop_table :sections
    drop_table :project_sections
    remove_column :tasks, :section_id
  end
end
