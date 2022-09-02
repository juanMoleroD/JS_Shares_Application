import React from "react";
import Shares from "./Shares";


const ListOfShares = ({shares}) => {

    // const shareNodes = shares.map( (share, index) => {
    //     return <Shares share={share} key={index}/>
    // });

    return(
<ul>
    {/* {shareNodes} */}
    {
        shares? 
        <Shares share={shares} /> 
        : <p>loading</p>
    }
</ul>

    )
    
}
    




export default ListOfShares;