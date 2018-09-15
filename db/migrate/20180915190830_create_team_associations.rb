class CreateTeamAssociations < ActiveRecord::Migration[5.1]
  def change
    create_table :team_associations do |t|
      t.integer :member_id, null: false
      t.integer :team_id, null: false
      t.timestamps
    end

    add_index :team_associations, [:member_id, :team_id]
  end
end
