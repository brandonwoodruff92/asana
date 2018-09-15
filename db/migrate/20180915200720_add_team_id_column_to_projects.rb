class AddTeamIdColumnToProjects < ActiveRecord::Migration[5.1]
  def change
    add_column :projects, :team_id, :integer, null: false
    add_index :projects, :team_id
  end
end
