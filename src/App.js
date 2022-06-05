import React, { useEffect, useState } from 'react';
import alanBtn from "@alan-ai/alan-sdk-web"
import NewsCards from './components/NewsCards/NewsCards';
import axios from 'axios';

const alanKey = "94e0049184377b3f61687886898afe262e956eca572e1d8b807a3e2338fdd0dc/stage"
const API_KEY = "3a405e2392de42a999d0f0b284a8b431"
const NEWS_URL = "https://newsapi.org/v2/top-headlines?sources=bbc-news"

const App  = () => {
    const [newsArticle, setNewsArticle]  = useState([])
    // initializing the alan btn using useEffect hook everytime the app starts
    useEffect(() => {
        axios.get(`${NEWS_URL}&apiKey=${API_KEY}`)
        .then((response) => {
            const data = response.data
        })
        .catch((error) => {
            console.log(error)
        })


        alanBtn({
            key: alanKey,
            onCommand: ({ command , articles }) => {
                if(command === "newHeadlines") {
                    setNewsArticle(articles.articles)
                    console.log("successfull")
                }
            }
        })
    }, [])
    return (
        <div>
            <h1>Alan AI News App Mc</h1>
            <NewsCards articles={newsArticle}/>
        </div>
    )
}

export default App;