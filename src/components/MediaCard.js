import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    boxShadow:'3px 3px 3px 3px #25170e',
    color:'white',
    margin:'20px'
   
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({text,value,color}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{backgroundColor: color}}>
      <CardActionArea>
          <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {text}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" >
           <CountUp className='count'

           end={value}
           duration={4}
           separator=" "
       
     
           />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}