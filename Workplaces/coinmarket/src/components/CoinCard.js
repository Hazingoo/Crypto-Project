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
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    color: (coinPercentage) => (coinPercentage >= 0 ? 'green' : 'red'),
  },
});

const CoinCard = ({ coinName, coinPrice, coinPercentage }) => {
  const classes = useStyles(coinPercentage);
  return (
    <Card
      className={classes.card}
      style={{
        display: 'block',
        width: '10vw',
        transitionDuration: '0.3s',
        backgroundColor: 'rgb(0,0,0,0)',
      }}
    >
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          {coinName}
        </Typography>
        <Typography variant='h2' component='h2'>
          ${coinPrice}
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          {coinPercentage}%
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Trade now</Button>
      </CardActions>
    </Card>
  );
};

export default CoinCard;
