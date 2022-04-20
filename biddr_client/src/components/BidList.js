import BidDetails from './BidDetails'

const BidList = (props) => {
    const bids = props.list
    return (
        <div>
            <h4>Bid List</h4>
            <ul>
                {
                    bids ?
                        bids.map((e, i) => {
                            return <BidDetails 
                                key={i}
                                price={e.price}
                                created_at={e.created_at}
                            />
                        })
                        :
                        null
                }
            </ul>
        </div>
    )
}

export default BidList;