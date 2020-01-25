import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  gradeOption: {
    fontSize: 14,
    display: 'inline-block',
  },
  gradeOptionVal: {
    fontSize: 40,
    display: 'block',
  },
  grade: {
    fontSize: 14,
    display: 'inline-block',
  },
  profRating: {
    fontSize: 14,
    display: 'inline-block',
  },
  courseRating: {
    fontSize: 14,
    margin: '0 6px',
    display: 'inline-block',
  },
  hours: {
    fontSize: 14,
    display: 'inline-block',
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ReviewCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        {/*Took course?*/}
        {/* Grade Option and Final Grade
        Professor Rating
        Course Rating
        Average Weekly Hours
        Review */}

        <div>
          <div>
        <Typography className={classes.gradeOption} color="textSecondary" >
          Grade Option
        </Typography>
        <Typography className={classes.gradeOptionVal}>
          ABC
        </Typography>
        </div>
        <div>
        <Typography className={classes.grade} color="textSecondary" >
          Grade B
        </Typography>
        </div>
        </div>
        
        <div>
        <Typography className = {classes.profRating} color="textSecondary">
          Professor Rating: 69
        </Typography>
        <Typography className={classes.courseRating} color="textSecondary">
          Course Rating: 420
        </Typography>
        </div>
        <Typography className={classes.hours} color="textSecondary">
          Average hours: 1
        </Typography>
        <Typography variant="body2" component="p">
          I really like CS17. Omg those two Asian TAs with the glasses are so hot. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See more reviews like this</Button>
      </CardActions>
    </Card>
  );
}