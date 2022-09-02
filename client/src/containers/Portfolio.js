import React, {useState, useEffect} from "react";
import ListOfShares from "../components/ListOfShares";
import {getShares} from "../SharesService"


const Portfolio = () => {

    const [shares, setShares] = useState("");
    const [share, setShare] = useState("");

    
    useEffect(() => {
        getShares()
            .then(response => {
                setShares(response)
                setShare(response["Meta Data"]["2. Symbol"])
            });
    }, [])
    // useEffect(());
    
    return(
        <>
        <main>
                <h2>Portfolio of shares:</h2>
           {/* <ListOfShares shares={shares}/> */}
                {
                    shares.length > 0 ? <h3>{shares["Meta Data"]["1. Information"]}</h3> : <h3>loading</h3>
                }
                
                {/* <h3>{share}</h3> */}

            </main>
        </>
    )
}

export default Portfolio;