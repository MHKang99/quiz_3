class Api::V1::BidsController < Api::ApplicationController

    before_action :authenticate_user!
    before_action :find_auction
    def create
        bid = Bid.new(params.require(:bid).permit(:price))
        bid.auction_id = @auction.id;
        bid.user_id = current_user.id
        if bid.save
            render json: { bid: bid }
        else
            console.log("did not save")
        end
    end
    


    private

    def find_auction
        @auction = Auction.find params[:auction_id]
    end
    

end
