class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.integer :parent_task_id
      t.integer :section_id, null: false
      t.string :name, null: false
      t.string :description
      t.datetime :due_date
      t.boolean :complete, default: false
      t.timestamps
    end

    add_index :tasks, [:parent_task_id, :section_id]
  end
end
