import React, {useState, useEffect} from "react";
import ListOfShares from "../components/ListOfShares";
import {getPortfolio, getSharePrice, getShares} from "../SharesService"


const Portfolio = () => {

    const [portfolio, setPortfolio] = useState();

    const [shares, setShares] = useState(""); //THE QUOTES ARE IMPORTANT


    useEffect(() => {
        getPortfolio()
        .then(data => {
            setPortfolio(data)
        })
        getSharePrice("GOOG")
            .then(response => {
                setShares(response)
            });
    }, [])
    
    return(
        <>
            <main>
                <h2>Portfolio of shares:</h2>
                <ListOfShares portfolio={portfolio} shares={shares}/>

            </main>
        </>
    )
}

export default Portfolio;