import React from "react";

const Shares = ({share}) => {

    return <li> {share.shareName} - {share.sharePurchasePrice} - {share.heldAmount}</li>;
    
    }


export default Shares;