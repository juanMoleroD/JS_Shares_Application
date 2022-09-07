import React from "react";
import Shares from "./Shares";
import TotalValue from "./TotalValue";

const ListOfShares = ({ portfolio, removeShare, updateInput }) => {

    const shareNodes = portfolio.map((share, index) => {
        return <Shares share={share} key={index} removeShare={removeShare} updateInput={updateInput} />
    })

    return (
        <>
            <ul className="listofshares">
                {shareNodes}
            </ul>
            <div>
                <TotalValue portfolio={portfolio} />
            </div>
        </>
    )
}

export default ListOfShares;