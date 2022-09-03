import React from "react";

const Shares = ({share}) => {

    return (
        <li> 
            {share.shareName} - {share.heldAmount} - bough at: {share.sharePurchasePrice}
                - current price: {share.currentPrice} 
        </li>
    )
}

export default Shares;