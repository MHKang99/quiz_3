# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


Auction.destroy_all
User.destroy_all
Bid.destroy_all


user = User.create(
    first_name: "User",
    last_name: "User",
    email: "user@user.com",
    password: "123",
)

3.times do
    created_at = Faker::Date.backward(days:365 * 5)
    Auction.create(
        title: "my auction",
        body: "my auction body",
        created_at: created_at,
        updated_at: created_at,
        ends_at: "April 30",
        user_id: user.id,
        target_price: 777
    )
    rand(1..5).times do
        Bid.create(
            price: 123, 
            auction_id: Auction.first.id, 
            created_at: created_at,
            updated_at: created_at,
            user_id: user.id)
    end
end

auctions = Auction.all
bids = Bid.all

puts "generated auctions #{auctions.count}"
puts "generated bids #{bids.count}"
puts "generated user #{user.first_name}"