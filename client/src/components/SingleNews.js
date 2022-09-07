import React from "react";

const SingleNews = ({ item }) => {

    return (
        <div>
            <h3 className="vitem"> <a href={item.url}>{item.headline} </a></h3>
        </div>
    )
}

export default SingleNews;