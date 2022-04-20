class AddEndsAtColumnForAuction < ActiveRecord::Migration[7.0]
  def change
    add_column :auctions, :ends_at, :string
  end
end
