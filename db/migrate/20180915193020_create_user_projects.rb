class CreateUserProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :user_projects do |t|
      t.integer :user_id, null: false
      t.integer :project_id, null: false
      t.timestamps
    end

    add_index :user_projects, [:user_id, :project_id]
  end
end
