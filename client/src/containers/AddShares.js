import React, {useState, useEffect} from "react";
import {postShare, getPortfolio, getSharePrice, getSearch} from "../SharesService";




const AddShares = ({filterFunction, symbolSearchResults}) => {
    const [name, setName] = useState("")
    const [purchase, setPurchase] = useState("")
    const [amount, setAmount] = useState("")



    const saveNewShare = (share) => {
        postShare(share)
     }
    
    const handleNameInput = (event) => {
        setName(event.target.value)
    }
    const handlePurchasePriceInput = (event) => {
        setPurchase(event.target.value)
    }

    const handleAmountInput = (event) => {
        setAmount(event.target.value)
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        saveNewShare({
            "shareName": name,
            "sharePurchasePrice": purchase,
            "heldAmount": amount
        })
    };

    const searchInput = ((event) =>{
        setName(event.target.value)
        filterFunction(event.target.value)

    });



    const symbolSearchNodes = symbolSearchResults.map(symbolData => {
        return (
            
            <option key={symbolData["1. symbol"]} value={symbolData["1. symbol"]}> {symbolData["1. symbol"]} - {symbolData["2. name"]}</option>
        )
    })


    return (
        <div>
        <h2>Add A New Share</h2>
            <form className="formtoadd"onSubmit={onSubmit}>   
                <label> Name: </label>
                <input placeholder="Please type in the share you would like"type="text" name="shareName" value={name} onChange={searchInput}/>
                <select onChange={(e) => setName (e.target.value)}>{symbolSearchNodes}</select> 
                <label> Purchase Price: </label>
                <input type="text" name="sharePurchasePrice" value={purchase} onChange={handlePurchasePriceInput}/>
                <label> Amount: </label>
                <input type="text" name="heldAmount" value={amount} onChange={handleAmountInput}/>
    
                <br></br>
                <input className="button" type="submit" value="Add To Portfolio" id="save"/>

            </form>

            <div>
           
             
                
            </div>
        </div>
    )
}


export default AddShares;