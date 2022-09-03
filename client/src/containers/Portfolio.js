import React, {useState, useEffect} from "react";
import ListOfShares from "../components/ListOfShares";
import {getPortfolio, getSharePrice} from "../SharesService"
import Shares from "../components/Shares";


const Portfolio = () => {

    const [portfolio, setPortfolio] = useState();

    useEffect(() => {
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
    }, [])

    
    
    return(
        <>
            <main>
                <h2>Portfolio of shares:</h2>
                {portfolio? 
                    <ListOfShares portfolio={portfolio} />
                    : <p>Loading</p>
                }
               

            </main>
        </>
    )
}

export default Portfolio;