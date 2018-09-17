class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
      t.integer :prev_id
      t.integer :next_id
      t.integer :orderable_id
      t.string :orderable_type
    end

    add_index :orders, [:prev_id, :next_id, :orderable_id]
  end
end
