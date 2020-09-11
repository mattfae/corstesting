class CreateTestdata < ActiveRecord::Migration[6.0]
  def change
    create_table :testdata do |t|
      t.string :testinfo

      t.timestamps
    end
  end
end
