
const BidForm = props => {

    const getDataAndSubmit = (event) => {
        event.preventDefault();
        const fd = new FormData(event.currentTarget);
        console.log(fd.get("price"));
        props.submitForm(
            {
                price: fd.get("price"),
                created_at: new Date(),
                // auction_id: 
            }
        )
    }

    return (
        <form onSubmit={getDataAndSubmit}>
            <div>
                <label htmlFor="Price">Price</label>
                <br />
                <input type="integer" name="price" id="" />
            </div>
            <div>
                <input type="submit" value="BID" />
            </div>
        </form>
    )
}
export default BidForm;