import React from "react";
import Shares from "./Shares";
import TotalValue from "./TotalValue";


const ListOfShares = ({ portfolio, removeShare, updateSharePrice, updateAmountHeld }) => {

    const shareNodes = portfolio.map((share, index) => {
        return <Shares share={share} key={index} removeShare={removeShare}  updateSharePrice={updateSharePrice} updateAmountHeld={updateAmountHeld} />
    })

    return (
        <>
            <ul>
                {shareNodes}
            </ul>
            <div>
                <TotalValue portfolio={portfolio}/>

        </div>


        </>


    )
}

export default ListOfShares;