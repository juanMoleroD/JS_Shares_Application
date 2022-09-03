import React from "react";

const Shares = ({portfolio, share}) => {

    return <li> {portfolio.shareName} - {portfolio.heldAmount} 
    - bough at: {portfolio.sharePurchasePrice} - current price: {share["Weekly Time Series"]["2022-09-02"]["4. close"]}</li>;
    
    }


export default Shares;