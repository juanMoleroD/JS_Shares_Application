import React, {useState} from "react";
import ListOfShares from "../components/ListOfShares";


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


    const addShares = (share) => {
        const temp = shares.map(s=>s);
        temp.push(share);
        setShares(temp);
    }

    const removeShares = (id) =>{
        const temp = shares.map(s=> s);
        const indexToDel = temp.map(s => s._id).index(id);
        console.log(indexToDel)

        temp.splice(indexToDel, 1);
        setShares(temp)
    }


    useState(() => {
        getShares();
    }, [])
    
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