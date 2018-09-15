class CreateProjectLogs < ActiveRecord::Migration[5.1]
  def change
    create_table :project_logs do |t|
      t.string :type, null: false
      t.integer :type_id, null: false
      t.integer :user_id, null: false
      t.string :message, null: false
      t.timestamps
    end

    add_index :project_logs, [:type_id, :user_id]
  end
end
