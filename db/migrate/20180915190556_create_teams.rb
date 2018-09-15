class CreateTeams < ActiveRecord::Migration[5.1]
  def change
    create_table :teams do |t|
      t.string :name, null: false
      t.string :description
      t.string :type, null: false
      t.timestamps
    end
  end
end
