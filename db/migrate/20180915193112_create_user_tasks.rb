class CreateUserTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :user_tasks do |t|
      t.integer :user_id, null: false
      t.integer :task_id, null: false
      t.timestamps
    end

    add_index :user_tasks, [:user_id, :task_id]
  end
end
