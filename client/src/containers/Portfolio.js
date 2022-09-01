import React, {useState} from "react";
import NavBar from "../components/NavBar";

const Portfolio = () => {

    const [shares, setShares] = useState([]);

    const getShares = () => {
        setShares( [
            {
                shareName: "GOOG",
                sharePurchasePrice: 110,
                heldAmount: 2
            },
            {
                shareName: "AAPL",
                sharePurchasePrice: 120,
                heldAmount: 1
            },
            {
                shareName: "TSLA",
                sharePurchasePrice: 150,
                heldAmount: 3
            }
        ])
    }


    const shareNodes = shares.map( (share, index) => {
        return <li key={index}> {share.shareName} - {share.sharePurchasePrice} - {share.heldAmount}</li>;
    });


    // -- useState --//
    useState(() => {
        getShares();
    }, [])
    
    return(
        <>
        <main>
        
                <h2>Portfolio of shares:</h2>
                <ul>
                    {shareNodes}
                </ul>
            </main>
        </>
    )
}

export default Portfolio;