import React, {useState, useEffect} from "react";
import {postShare, getPortfolio, getSharePrice} from "../SharesService";



const AddShares = () => {
    // const [portfolio, setPortfolio] = useState();
    const [name, setName] = useState("")
    const [purchase, setPurchase] = useState("")
    const [amount, setAmount] = useState("")

    // useEffect(() => {
    //     getPortfolioShares()
    // }, [])

    // const getPortfolioShares = () =>{
    //     getPortfolio()
    //     .then(data => {
    //         const portfolioWithSharePricesArray = data.map( (share) => {
    //             return getSharePrice(share.shareName)
    //         } )

    //         Promise.all(portfolioWithSharePricesArray)
    //         .then(resolvedPromises => {

    //             resolvedPromises.forEach((sharePrice, index) => {
    //                 data[index]["currentPrice"] = parseInt(sharePrice);
    //             })
    //             setPortfolio(data);
    //         })
    //     })
    // }
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

    return (
        <div>
            <form onSubmit={onSubmit}>   
                <label> Name: </label>
                <input type="text" name="shareName" value={name} onChange={handleNameInput}/>
                <label> Purchase Price: </label>
                <input type="text" name="sharePurchasePrice" value={purchase} onChange={handlePurchasePriceInput}/>
                <label> Amount: </label>
                <input type="text" name="heldAmount" value={amount} onChange={handleAmountInput}/>
                <br></br>
                <input type="submit" value="Add To Portfolio" id="save"/>
            </form>
        </div>
    )
}


export default AddShares;