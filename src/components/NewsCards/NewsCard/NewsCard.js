import React from 'react'
import useStyles from './styles.js'
import { Card , CardActions , CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core'

const NewsCard = ({ article , index}) => {
  const classes = useStyles();
  console.log( " articles return " , article.urlToImage)

  const { description , url, publishedAt , source, title, urlToImage} = article
  return (
    <Card className={classes.card}>
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