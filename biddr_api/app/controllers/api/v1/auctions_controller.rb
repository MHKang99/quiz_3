class Api::V1::AuctionsController < Api::ApplicationController
    before_action :find_auction, only: [:show]
    def index
        auctions = Auction.order(created_at: :desc)
        render(json: auctions, each_serializer: AuctionCollectionSerializer)
    end

    def show

        render(json: @auction)
    end

    def create
        auction = Auction.new(auction_params)
        auction.user_id = current_user.id
        auction.save
        render json: { auction: auction }
    end

    private

    def auction_params
        params.require(:auction).permit(:title, :body, :ends_at, :target_price, :created_at)
    end

    def find_auction
        @auction = Auction.find(params[:id])
    end

end
