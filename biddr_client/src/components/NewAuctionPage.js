import React, { Component } from 'react';
import { Auction } from '../requests';
import NewAuctionForm from './NewAuctionForm';

class NewAuctionPage extends Component {
    constructor(props) {
        super(props);
        this.state = { errors: [] };
        this.createNewAuction = this.createNewAuction.bind(this)
    }

    createNewAuction(params) {
        console.log(`Params: ${params}`)
        Auction.create(params)
            .then((auction) => {
                    this.props.history.push(`/auctions/${auction.id}`)
            })
    }

    render() {
        return (
            <div>
                <NewAuctionForm errors={this.state.errors} submitForm={(params) => this.createNewAuction(params)} />
            </div>
        )
    }
}

export default NewAuctionPage;




