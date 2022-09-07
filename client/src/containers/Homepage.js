import React, { useEffect, useState } from "react";
import NewsList from "../components/NewsList";

const HomePage = () => {

    const [news, setNews] = useState([])
    const [selectedNews, setSelectedNews] = useState([])

    useEffect(() => {
        getNews()
    }, [])

    const getNews = () => {
        fetch("https://content.guardianapis.com/search?q=investment&format=json&api-key=test")
            .then(res => res.json())
            .then(newsLog => processData(newsLog));
    }

    const processData = (data) => {
        const newsLog = data.response.results.map((article) => {
            return {
                "headline": article.webTitle,
                "section": article.sectionName,
                "url": article.webUrl
            }
        })
        setNews(newsLog)
    };

    const onNewsSelected = function (news) {
        setSelectedNews(news);
    }

    return (
        <>
            <h2>JPA Portfolio</h2>
            <div className="home">
                <section className="homecard">
                    <h2 className="welcome">Welcome to JPA Portfolio App! Here you will find all the latest updates on your portfolio. </h2>
                    <h3 className="welcome">JPA Portfolio App truly revolutionises the online portfolio tracking space.
                        With JPA Portfolio, you can automatically track the true performance of all your listed stocks from the US Stock Market. You will also be able to follow the latest financial news, latest CNBC tweets and have direct access to Watch Day Trading Live from our partner YouTube Channel.
                    </h3>
                </section>
                <div className="homecard2">
                    <div className="mediapage">
                        <section className="twitter"><a className="twitter-timeline" href="https://twitter.com/CNBC?ref_src=twsrc%5Etfw" data-tweet-limit="2" width="150" height="525">Tweets by CNBC</a>  </section>
                        <section> <iframe width="350" height="525" src="https://www.youtube.com/embed/zCTM162uKIk?controls=0">
                        </iframe></section>
                    </div>
                    <section>
                        <NewsList news={news} onNewsSelected={onNewsSelected} />
                    </section>
                </div></div></>
    )
};

export default HomePage;