
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
      <div className="home">
        <section className="homecard">
            Welcome to Dolla Juan's! Here you will find all the latest updates on your portfolio. 

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
<p>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!</p>
<p>Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!</p>
<p>Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil explicabo perferendis quos provident delectus ducimus necessitatibus reiciendis optio tempora unde earum doloremque commodi laudantium ad nulla vel odio?</p>
       
        </section>
        <div className="homecard2">
        <div className="mediapage">
        <section className="twitter"><a className="twitter-timeline" href="https://twitter.com/CNBC?ref_src=twsrc%5Etfw" data-tweet-limit="2" width="150" height="525">Tweets by CNBC</a>  </section>
       <section> <iframe width="350" height="525" src="https://www.youtube.com/embed/zCTM162uKIk?controls=0">
</iframe></section>
</div>
        <section>
            <NewsList news={news} onNewsSelected={onNewsSelected}/>
            </section>
        </div></div></>

    )
};

export default HomePage;