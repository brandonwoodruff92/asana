class AlterTaskNameConstraints < ActiveRecord::Migration[5.1]
  def change
    change_column :tasks, :name, :string, null: true
  end
end
