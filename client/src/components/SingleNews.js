import React from "react";
import NewsList from "./NewsList";

const SingleNews = ({item}) => {
    
return <div>

<h3 className="vitem"> <a href={item.url}>{item.headline} </a></h3>

</div>

} 

export default SingleNews;