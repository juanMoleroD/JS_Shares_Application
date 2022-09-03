import React from "react";
import Shares from "./Shares";


const ListOfShares = ({ portfolio }) => {

    const shareNodes = portfolio.map( (share, index) => {
        return <Shares share={share} key={index}/> } )

    return (
        <ul>
            {shareNodes}
        </ul>
    )
}

export default ListOfShares;