import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../App.css';
import axios from 'axios';
import {
  Box,
  Typography,
  createTheme,
  ThemeProvider,
  Paper,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CoinCard from './CoinCard';
import { ElevatorSharp } from '@mui/icons-material';

let startCoin = 0;
let endCoin = 4;
const theme = createTheme();
theme.typography.h3 = {
  fontSize: '2rem',
  '@media (min-width:600px)': {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3.5rem',
  },
};

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: 'rgb(212,70,1,0.7)',
    position: 'relative',
  },
  typographyContainer: {
    width: '50%',
    fontSize: '0.85 em',
    marginLeft: '10%',
    marginTop: '2%',
    color: 'black',
  },
  word: {
    marginLeft: '10%',
    marginTop: '5px',
  },
  paper: {
    backgroundColor: 'transparent',
  },
  image: {
    position: 'absolute',
    top: 0,
  },
}));

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};
const PromoteSection = () => {
  const classes = useStyles();
  const [coins, setCoins] = useState([]);
  const [inProp, setInProp] = useState(false);
  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
    const interval = setInterval(() => {
      setInProp(true);
      setTimeout(() => {
        setInProp(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      component='section'
      sx={{
        height: '80vh',
      }}
      className={classes.box}
    >
      <ThemeProvider theme={theme}>
        <Typography variant='h3' className={classes.typographyContainer}>
          Buy and experience the CryptoMarket in Minutes
        </Typography>
      </ThemeProvider>
      <Typography variant='caption text' className={classes.word}>
        Join the world smallest crypto simulator
      </Typography>
      <Box
        component='img'
        sx={{
          height: 1132 / 3,
          width: 1006 / 3,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
          position: 'absolute',
          top: '20%',
          //prettier-ignore
          ['@media (max -width:780px)']: { // eslint-disable-line no-useless-computed-key 
            display: 'none',
          },
        }}
        alt='CoinBase'
        src='Images/CoinBase.png'
      />
      <Box
        sx={{
          height: 500,
          width: 600,
          position: 'absolute',
          right: 30,
          top: 40,
        }}
      >
        <Grid
          container
          direction='row'
          justifyContent='flex-end'
          alignItems='center'
          spacing={2}
        >
          {coins.slice(0, 4).map((el) => {
            return (
              <CSSTransition
                appearance={true}
                in={inProp}
                timeout={200}
                classNames='my-node'
              >
                {(state) => (
                  <div
                    style={{
                      ...defaultStyle,
                      ...transitionStyles[state],
                    }}
                  >
                    <Grid item md={6}>
                      <CoinCard
                        coinName={el.id}
                        coinPrice={el.current_price}
                        coinPercentage={el.market_cap_change_percentage_24h}
                      />
                    </Grid>
                  </div>
                )}
              </CSSTransition>
            );
          })}
          {/* <Grid item md={6}>
            <CoinCard CoinName='Daniel' />
          </Grid>
          <Grid item md={6}>
            <CoinCard CoinName='Daniel' />
          </Grid>
          <Grid item md={6}>
            <CoinCard CoinName='Daniel' />
          </Grid>
          <Grid item md={6}>
            <CoinCard CoinName='Daniel' />
          </Grid> */}
        </Grid>
      </Box>
    </Box>
  );
};
export default PromoteSection;
