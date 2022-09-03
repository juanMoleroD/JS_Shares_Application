import React from "react";
import Shares from "./Shares";


const ListOfShares = ({portfolio, shares}) => {


    return(
<ul>

    {
        shares? 
        <Shares portfolio={portfolio[0]} share={shares} /> 
        : <p>loading</p>
    }
</ul>

    )
    
}
    




export default ListOfShares;