import React from "react";
import SingleNews from "./SingleNews";

const NewsList = ({ news }) => {

    const newsItems = news.map((newItem, index) => {
        return <SingleNews item={newItem} key={index} />
    })

    return (<>
        <h2>Latest Financial Headlines</h2>
        <div className="vwrap"><div className="vmove">
            <ul className="newslist">
                {newsItems}
            </ul>
        </div></div></>
    )
};

export default NewsList;