class ChangeUsersColumnToName < ActiveRecord::Migration[5.1]
  def change
    rename_column :users, :users, :name
  end
end
