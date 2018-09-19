class RemoveAndCreateTeamIdColumn < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :team_id
    add_column :users, :team_id, :integer
  end
end
