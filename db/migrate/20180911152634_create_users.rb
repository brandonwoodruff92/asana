class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :users, null: false
      t.string :email, null: false, unique: true
      t.string :img_url
      t.string :password_digest, null: false
      t.string :session_token, null: false, unique: true
      t.timestamps

    end
    add_index :users, [:email, :session_token]
  end
end
