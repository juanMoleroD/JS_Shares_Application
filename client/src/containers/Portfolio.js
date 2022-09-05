import React, {useState, useEffect} from "react";
import ListOfShares from "../components/ListOfShares";
import {getPortfolio, getSharePrice, updateShare} from "../SharesService"
import Shares from "../components/Shares";


const Portfolio = () => {

    const [portfolio, setPortfolio] = useState();

    useEffect(() => {
        getPortfolioShares()
    }, [])

    const getPortfolioShares = () =>{
        getPortfolio()
        .then(data => {
            const portfolioWithSharePricesArray = data.map( (share) => {
                return getSharePrice(share.shareName)
            } )

            Promise.all(portfolioWithSharePricesArray)
            .then(resolvedPromises => {

                resolvedPromises.forEach((sharePrice, index) => {
                    data[index]["currentPrice"] = parseInt(sharePrice);
                })
                setPortfolio(data);
            })
         
                
        })
    }

    const removeShare = (id) => {
        const temp = portfolio.map(s =>s);
        const indexToDel = temp.map(s => s._id).indexOf(id);
    
        temp.splice(indexToDel, 1);
        setPortfolio(temp);
      }

    const updateSharePrice = (share, share_id) =>{
        updateShare(share, share_id)
        .then(()=>{
            getPortfolioShares()
        })
    }

    const updateAmountHeld = (share, share_id) =>{
        updateShare(share, share_id)
        .then(()=>{
            getPortfolioShares()
        })
    }

    
    
    return(
        <>
            <main>
                <h2>Portfolio of shares:</h2>
                {portfolio? 
                    <ListOfShares portfolio={portfolio} removeShare={removeShare} updateSharePrice={updateSharePrice} updateAmountHeld={updateAmountHeld} />
                    : <p>Loading</p>
                }
               

            </main>
        </>
    )
}

export default Portfolio;