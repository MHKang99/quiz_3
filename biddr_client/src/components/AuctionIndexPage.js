import  React, {Component} from 'react';
// import questionIndexData from '../questionIndexData';
import { Auction } from '../requests';
import { Link } from 'react-router-dom';

class AuctionIndexPage extends Component {
    constructor(props){
        super(props);
        this.state = { auctions: []}
    }

    componentDidMount(){
        console.log("did mount")
        Auction.index()
        .then((auctionsData) => {
            this.setState((state)=>{
                return {
                    auctions: auctionsData
                }
            })
        })
    }

    render() {
        return (
            <>
                <ul>
                    {
                        this.state.auctions.map((e, i) => {
                            return (
                                    <div key={i}>{e.id} - 
                                    <a href={`/auctions/${e.id}`}>{e.title} </a>
                                    <p>created at {e.created_at}</p>
                                    </div>
                            )
                        })
                    }
                </ul>
            </>
        )
    }
}



export default AuctionIndexPage;