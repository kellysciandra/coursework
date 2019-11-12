class CreateSelects < ActiveRecord::Migration[6.0]
  def change
    create_table :selects do |t|
      t.string :user_id, foreign_key: true 
      t.string :courseload_id, foreign_key: true
      t.timestamps
    end
  end
end
