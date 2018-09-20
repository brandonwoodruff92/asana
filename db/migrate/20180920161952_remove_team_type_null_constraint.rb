class RemoveTeamTypeNullConstraint < ActiveRecord::Migration[5.1]
  def change
    remove_column :teams, :team_type
    add_column :teams, :team_type, :string
  end
end
