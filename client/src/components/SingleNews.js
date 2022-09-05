import React from "react";
import NewsList from "./NewsList";

const SingleNews = ({item}) => {
    
return <ul>

<h3>{item.headline}</h3>
<li>{item.section}</li>
<li>{item.url}</li>
</ul>

} 

export default SingleNews;