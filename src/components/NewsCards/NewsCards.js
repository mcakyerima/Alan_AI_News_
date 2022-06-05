import React from 'react'
import NewsCard from './NewsCard/NewsCard';
import { Grid, Grow , Typography } from "@material-ui/core";
import useStyles from './styles.js'


const NewsCards = ({articles}) => {
  // call the useSthle hook and assign it to classes for custom material/UI css
  const classes = useStyles()
  console.log("articles prop" , articles)
  return (
    <Grow in>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>

        {
            articles.map((article, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}>
                  <NewsCard article={article} index={index}/>
              </Grid>
            ))
        }
      </Grid>
      
    </Grow>
  )
}

export default NewsCards;