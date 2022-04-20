class AddTargetPriceToAuction < ActiveRecord::Migration[7.0]
  def change
    add_column :auctions, :target_price, :integer
  end
end
