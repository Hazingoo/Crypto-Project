// IMPORTING APIS
import React, { useState, useRef } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  List,
  Box,
  Paper,
  ListItem,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { BrowserRouter, Link } from 'react-router-dom';
import NavBarCard from './NavBarCard';

// IMPORTING ICONS
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import PersonIcon from '@material-ui/icons/Person';
import BookmarksIcon from '@material-ui/icons/Bookmarks';

// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
  },
  icon: {
    color: 'Black',
    marginRight: theme.spacing(10),
  },
  appBarSpacer: theme.mixins.toolbar,
}));

const NavBar = (props) => {
  const classes = useStyles();
  const cardRef = useRef();
  return (
    <div>
      <AppBar
        style={{
          background: '#FFFFFF',
          display: 'block',
        }}
      >
        <Toolbar className='classes.toolbar'>
          <Typography className={classes.icon} variant='h6'>
            Cry Sim
          </Typography>
          <Box>
            <Button className={classes.menuButton} variant='text' size='small'>
              Prices
            </Button>
            <Button
              onMouseEnter={() => {
                cardRef.current.handleClick();
              }}
              className={classes.menuButton}
              variant='text'
              size='small'
            >
              Learn
            </Button>
            <Button className={classes.menuButton} variant='text' size='small'>
              Trade
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <div className={classes.appBarSpacer}></div>
      <NavBarCard ref={cardRef} />
    </div>
  );
};

export default NavBar;
