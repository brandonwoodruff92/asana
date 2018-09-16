class AlterRemoveSectionModelConstraints < ActiveRecord::Migration[5.1]
  def change
    change_column :sections, :name, :string, null: true
    remove_column :sections, :project_id
  end
end
