
import React, { useEffect, useState } from "react";
import NewsList from "../components/NewsList";


const HomePage = () => {

    const [news, setNews] = useState([])
    const [selectedNews, setSelectedNews]= useState([])

    useEffect(()=>{

        getNews()
    },[])

    const getNews=()=>{
        fetch("https://content.guardianapis.com/search?q=investment&format=json&api-key=test")
        .then(res => res.json())
        .then(newsLog => processData(newsLog));
    }
    

    const processData = (data) => {
        console.log(data.response.results);
        const newsLog = data.response.results.map( (article) => {
            return{
                "headline" : article.webTitle,
                "section" : article.sectionName,
                "url" : article.webUrl
            }

        })
        setNews(newsLog)
        
        

    };

    const onNewsSelected = function(news){

        setSelectedNews(news);
    }

    return(
        <>
        <h2>HomePage</h2>
            <NewsList news={news} onNewsSelected={onNewsSelected}/>
        </>

    )
};

export default HomePage;