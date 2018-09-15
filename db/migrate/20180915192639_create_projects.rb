class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.integer :creator_id, null: false
      t.string :name, null: false
      t.string :description
      t.boolean :complete, default: false
      t.timestamps
    end

    add_index :projects, :creator_id
  end
end
