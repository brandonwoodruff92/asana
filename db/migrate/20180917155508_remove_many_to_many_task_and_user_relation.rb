class RemoveManyToManyTaskAndUserRelation < ActiveRecord::Migration[5.1]
  def change
    drop_table :user_tasks
    add_column :tasks, :assignee_id, :integer
  end
end
