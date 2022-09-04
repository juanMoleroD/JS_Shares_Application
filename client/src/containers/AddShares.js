import React from "react";


const AddShares = () => {

    return (
        <div>
            <form>
                <label> Name: </label>
                <input type="text" name="shareName"/>
                <label> Purchase Price: </label>
                <input type="text" name="sharePurchasePrice"/>
                <label> Amount: </label>
                <input type="text" name="heldAmount"/>
                <br></br>
                <input type="submit" value="Add To Portfolio" id="save"/>


            </form>

        </div>
    )
}


export default AddShares;