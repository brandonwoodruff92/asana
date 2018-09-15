class CreateProjectSections < ActiveRecord::Migration[5.1]
  def change
    create_table :project_sections do |t|
      t.integer :project_id
      t.integer :section_id
      t.timestamps
    end

    add_index :project_sections, [:project_id, :section_id]
  end
end
