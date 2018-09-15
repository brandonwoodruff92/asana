class CreateSections < ActiveRecord::Migration[5.1]
  def change
    create_table :sections do |t|
      t.integer :project_id, null: false
      t.string :name, null: false
      t.string :description
      t.datetime :due_date
      t.boolean :complete, default: false
      t.timestamps
    end

    add_index :sections, :project_id
  end
end
