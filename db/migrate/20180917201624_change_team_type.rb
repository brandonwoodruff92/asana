class ChangeTeamType < ActiveRecord::Migration[5.1]
  def change
    rename_column :teams, :type, :team_type
  end
end
