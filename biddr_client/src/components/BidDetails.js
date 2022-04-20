
const BidDetails = (props) => {
    return (
        <div>
            <p>
                {props.price}
                <br />
                <small>
                    Bid at : {props.created_at}
                </small>
            </p>
            
        </div>
    )
}

export default BidDetails;