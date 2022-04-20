class AuctionSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :created_at, :user_id, :ends_at, :target_price

  has_many :bids

  class BidSerializer < ActiveModel::Serializer
    attributes :id, :price, :created_at

  end

  belongs_to :user
  #We can rename the association with "key" in the serialized output
  class UserSerializer < ActiveModel::Serializer
    attributes :id, :first_name, :last_name, :email
  end
end
