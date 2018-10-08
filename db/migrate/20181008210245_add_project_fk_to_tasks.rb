class AddProjectFkToTasks < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :project_id, :integer
  end
end
