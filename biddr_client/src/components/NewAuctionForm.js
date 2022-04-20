const NewAuctionForm = props => {

    const getDataAndSubmit = (event) => {
        event.preventDefault();
        const fd = new FormData(event.currentTarget);
        console.log(fd);
        props.submitForm(
            {
                title: fd.get("title"),
                body: fd.get("body"),
                created_at: new Date(),
                target_price: fd.get("target_price"),
                ends_at: fd.get("ends_at")
            }
        )
    }

    return (
        <form onSubmit={getDataAndSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <br />
                <input type="text" name="title" id="" />
            </div>
            <div>
                <label htmlFor="body">Body</label>
                <br />
                <input type="text" name="body" id="" />
            </div>
            <div>
                <label htmlFor="target_price">Target Price</label>
                <br />
                <input type="integer" name="target_price" id="" />
            </div>
            <div>
                <label htmlFor="ends_at">Ends at</label>
                <br />
                <input type="text" name="ends_at" id="" />
            </div>
            <div>
                <input type="submit" value="Create Auction" />
            </div>
        </form>
    )
}
export default NewAuctionForm