import React, {useState, useEffect} from "react";
import ListOfShares from "../components/ListOfShares";
import {getPortfolio, getSharePrice, getShares} from "../SharesService"


const Portfolio = () => {

    const [portfolio, setPortfolio] = useState();

    const [sharePrices, setSharePrices] = useState(""); //THE QUOTES ARE IMPORTANT


    useEffect(() => {
        getPortfolio()
        .then(data => {
            setPortfolio(data)
        })
    }, [])

    useEffect(() => {
        if (portfolio) {
            getSharePrice(portfolio[0].shareName)
            .then(response => {
                if (response["Weekly Time Series"]) {
                    setSharePrices(response)
                } else console.log(response)
            });
        }
    }, [portfolio])
    
    return(
        <>
            <main>
                <h2>Portfolio of shares:</h2>
                <ListOfShares portfolio={portfolio} shares={sharePrices}/>

            </main>
        </>
    )
}

export default Portfolio;