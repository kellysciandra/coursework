class CreateCourseloads < ActiveRecord::Migration[6.0]
  def change
    create_table :courseloads do |t|
      t.string :language
      t.string :framework
      t.string :general
      t.string :link
      t.string :category

      t.timestamps
    end
  end
end
