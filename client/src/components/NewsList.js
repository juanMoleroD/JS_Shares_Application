import React from "react";
import SingleNews from "./SingleNews";

const NewsList = ({news}) => {

    const newsItems = news.map((newItem, index)=>{
        
        return <SingleNews item={newItem} key={index}/>
    })

    return(

        <div>
            <ul>
                {newsItems}
            </ul>

        </div>
    )
};

export default NewsList;