import React, { useEffect, useState } from 'react';
import alanBtn from "@alan-ai/alan-sdk-web"
import NewsCards from './components/NewsCards/NewsCards';
import axios from 'axios';
import wordsToNumbers from 'words-to-numbers';

import useStyles from './styles.js'

const alanKey = "94e0049184377b3f61687886898afe262e956eca572e1d8b807a3e2338fdd0dc/stage"
const API_KEY = "3a405e2392de42a999d0f0b284a8b431"
const NEWS_URL = "https://newsapi.org/v2/top-headlines?sources=bbc-news"

const App  = () => {
    const [newsArticle, setNewsArticle]  = useState([])
    const classes = useStyles()
    const [ activeArticle , setActiveArticle  ] = useState(-1);
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
            onCommand: ({ command , articles, number }) => {
                if(command === "newHeadlines") {
                    setNewsArticle(articles.articles)
                    // reset setActriveArticle to initial after fetching every news
                    setActiveArticle(-1)
                    console.log("successfull")
                }else if (command === 'highlight') {
                    // taking the previous active article index and incrementing it by one..
                    // when ever the hightlight is readed asycronously, it triggers an increment in the state of active article useState(0) which is then incremented by one
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1)
                }else if (command === 'open') {
                    const numbersParse = number.length > 2 ? wordsToNumbers(number , {fuzzy: true}) : number
                    const article = articles[numbersParse -1]
                    // if parsedNumber > 20, alan shld say pls try again cuz it's out of index error
                    if(numbersParse > 20) {
                        alanBtn.playText('please try searching again')
                    }else if (article) {
                        window.open(article.url, '_blank' )
                        alanBtn.playText('Opening...')
                    }

                }
            }
        })
    }, [])
    return (
        <div>
            <div className="classes.logoContainer">
                <img className={classes.alanLogo} src="https://alan.app/static/mobile_meduza.918bc547.png" alt='alan logo'/>
            </div>
            <NewsCards articles={newsArticle} activeArticle ={activeArticle}/>
        </div>
    )
}

export default App;