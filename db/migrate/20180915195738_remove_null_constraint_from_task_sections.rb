class RemoveNullConstraintFromTaskSections < ActiveRecord::Migration[5.1]
  def change
    change_column :tasks, :section_id, :integer, null: true
  end
end
