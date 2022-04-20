import AuctionDetails from './AuctionDetails';
import { useState, useEffect } from 'react'
import BidDetails from './BidDetails';
import BidList from './BidList'
import '../App.css';
import BidForm from './BidForm';
import { Bid } from "../requests";

import { Auction } from '../requests';

export default function AuctionShowPage(props){
    const [auction, setAuction] = useState({});

    useEffect(() => {
        Auction.show(props.match.params.id)
        .then((fetchedAPIAuction) => {
            setAuction(fetchedAPIAuction)
        })
    }, [props.match.params.id])

    useEffect(()=> {
        console.log("rendered")
        console.log(auction)
    },[auction])

    const { title, body, created_at, ends_at, target_price } = auction

    function createBid(params) {
        console.log(`Params: ${params}`)
        params.auction_id = auction.id
        Bid.create(params)
            .then((bid) => {
                console.log(auction)
                console.log(bid)
                setAuction({...auction, bids:[...auction.bids, bid.bid]})
            })
    }

    return (
        <div>
            <AuctionDetails 
            title={title}
            body={body}
            created_at={created_at}
            ends_at={ends_at}
            target_price={target_price}
            />
            <BidForm submitForm={(params) => createBid(params)}/>
            <BidList list={auction.bids}/>
        </div>
    )
}