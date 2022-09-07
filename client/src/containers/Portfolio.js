import React, { useState, useEffect } from "react";
import ListOfShares from "../components/ListOfShares";
import { getPortfolio, getSharePrice, updateShare, postShare, searchSymbol } from "../SharesService"
import './Portfolio.css';

const Portfolio = () => {

    const [portfolio, setPortfolio] = useState();

    useEffect(() => {
        getPortfolioShares()
    }, [])

    const getPortfolioShares = () => {
        getPortfolio()
            .then(data => {

                const formatedData = data.map((share) => {
                    const formatedShare = share;
                    formatedShare.sharePurchasePrice = parseInt(share.sharePurchasePrice);
                    formatedShare.heldAmount = parseInt(share.heldAmount);
                    return formatedShare
                })

                const portfolioWithSharePricesArray = formatedData.map((share) => {
                    return getSharePrice(share.shareName)
                })

                Promise.all(portfolioWithSharePricesArray)
                    .then(resolvedPromises => {
                        resolvedPromises.forEach((share, index) => {
                            formatedData[index]["currentPrice"] = parseInt(share["Weekly Time Series"]["2022-09-02"]["4. close"]);
                            formatedData[index]["historicPrices"] = share["Weekly Time Series"]
                        })
                        setPortfolio(formatedData);
                    })
            })
    }

    const removeShare = (id) => {
        const temp = portfolio.map(s => s);
        const indexToDel = temp.map(s => s._id).indexOf(id);

        temp.splice(indexToDel, 1);
        setPortfolio(temp);
    }

    const updateInput = (share, share_id) => {
        updateShare(share, share_id)
            .then(() => {
                getPortfolioShares();
            });
    }

    return (
        <>
            <main>
                <h2>Personal Portfolio</h2>
                {portfolio ?
                    <ListOfShares portfolio={portfolio} removeShare={removeShare} updateInput={updateInput} />
                    : <p>Fetching Portfolio.. Please Wait..Currently Loading...</p>
                }
            </main>
        </>
    )
}

export default Portfolio;