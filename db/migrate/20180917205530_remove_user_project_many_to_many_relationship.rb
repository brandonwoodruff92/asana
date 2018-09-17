class RemoveUserProjectManyToManyRelationship < ActiveRecord::Migration[5.1]
  def change
    drop_table :team_associations
    add_column :users, :team_id, :integer, null: false
  end
end
