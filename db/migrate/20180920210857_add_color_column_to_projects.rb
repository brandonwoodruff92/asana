class AddColorColumnToProjects < ActiveRecord::Migration[5.1]
  def change
    add_column :projects, :color_id, :string, default: "#e8384f";
  end
end
