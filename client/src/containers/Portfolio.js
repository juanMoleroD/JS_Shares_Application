import React, {useState, useEffect} from "react";
import ListOfShares from "../components/ListOfShares";
import {getShares} from "../SharesService"


const Portfolio = () => {

    const [shares, setShares] = useState(""); //THE QUOTES ARE IMPORTANT

    
    useEffect(() => {
        getShares()
            .then(response => {
                setShares(response)
            });
    }, [])
    // useEffect(());
    
    return(
        <>
            <main>
                <h2>Portfolio of shares:</h2>
                <ListOfShares shares={shares}/>

            </main>
        </>
    )
}

export default Portfolio;