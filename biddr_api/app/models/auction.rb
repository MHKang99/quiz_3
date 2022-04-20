class Auction < ApplicationRecord
    before_save :capitalize_title

    belongs_to :user
    has_many :bids, dependent: :destroy

    private

    def capitalize_title
        self.title.capitalize!
    end
end
