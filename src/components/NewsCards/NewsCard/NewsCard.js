import React, {useState, useEffect, createRef} from 'react'
import useStyles from './styles.js'
import classNames from 'classnames'
import { Card , CardActions , CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core'


const NewsCard = ({ article , index, activeArticle}) => {
  const { description , url, publishedAt , source, title, urlToImage} = article

  const classes = useStyles();
  console.log( " articles return " , article.urlToImage)

  // create a reference hook for every card we render
  const [elementRef , setElementRef] = useState([]);
  console.log( 'references' , elementRef)

  // utility function for scrolling to the active card as alan reads it
  const scrollToRef = (ref) => window.scroll(0 , ref.current.offsetTop - 50);

  // useEffect hook to create 20 empty array to  attach a ref for each card we render
  // and then fill createRef if not or add Reff to it
  useEffect(() => {
    setElementRef((reference) => Array(40).fill().map((_, index) => reference[index] || createRef()))
  }, [])

  // second useEffect hook that runs anytime Alan reads new article 
  useEffect(() => {
    if(index === activeArticle && elementRef[activeArticle]) {
      scrollToRef(elementRef[activeArticle])
    }
  }, [index , activeArticle, elementRef])


  return (
    <Card ref={elementRef[index]} className={classNames(classes.card , activeArticle === index ? classes.activeCard : null)}>
      <CardActionArea href={url} target="_blank">
        <CardMedia className={classes.media} image={ urlToImage || "No image"}/>
        <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
            <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant='h5'>{title}</Typography>
        <CardContent>
          <Typography variant="body2" color='textSecondary' component="p">{description}</Typography>

        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size='small' color="primary">Learn More</Button>
        <Typography variant='h5' color="textSecondary">{index + 1}</Typography> 
      </CardActions>
    </Card>


  )
}

export default NewsCard