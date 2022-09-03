import React, {useState, useEffect} from "react";
import ListOfShares from "../components/ListOfShares";
import {getPortfolio, getSharePrice} from "../SharesService"


const Portfolio = () => {

    const [portfolio, setPortfolio] = useState();

    useEffect(() => {
        getPortfolio()
        .then(arrayOfSharesInPortfolio => {
            const arrayOfPromisesForSharePrices = arrayOfSharesInPortfolio.map( (share) => {
                return getSharePrice(share.shareName)
            } )

            Promise.all(arrayOfPromisesForSharePrices)
            .then(arrayOfResolvedPromises => {

                arrayOfResolvedPromises.forEach((sharePrice, index) => {
                    arrayOfSharesInPortfolio[index]["currentPrice"] = parseInt(sharePrice);
                })
                setPortfolio(arrayOfSharesInPortfolio);
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