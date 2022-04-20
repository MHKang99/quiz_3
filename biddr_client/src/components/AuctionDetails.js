const AuctionDetails = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>
                {props.body}
                <br />
                Target Price: {props.target_price}
            </p>
            <p>
                <small>
                    ends at {props.ends_at}
                    <br />
                    Created at: {props.created_at}
                </small>
            </p>
        </div>
    )
}

export default AuctionDetails;