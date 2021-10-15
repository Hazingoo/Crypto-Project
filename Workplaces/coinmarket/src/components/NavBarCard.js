import { Paper, List, ListItem, Button, makeStyles } from '@material-ui/core';
import { useState, useImperativeHandle, forwardRef } from 'react';

const useStyles = makeStyles({
  paper: {
    background: '#FFFFFF',
    display: (props) => (props.haslearnClicked ? 'flex' : 'none'),
    justifyContent: 'center',
    // opacity: '0',
    // transition: 'all 250ms linear 2s',
  },
});

const NavBarCard = forwardRef((ref) => {
  const [haslearnClicked, haslearnHandler] = useState(false);
  const classes = useStyles({ haslearnClicked });
  useImperativeHandle(ref, () => ({
    handleClick: () => {
      haslearnClicked(true);
    },
  }));
  return (
    <Paper
      onMouseLeave={() => {
        haslearnHandler(!haslearnClicked);
      }}
      className={classes.paper}
      variant='elevation'
      elevation='14'
    >
      <List>
        <ListItem>
          <Button>Tutorial</Button>
          <Button>Crypto Basics</Button>
          <Button>Market updates</Button>
        </ListItem>
      </List>
    </Paper>
  );
});

export default NavBarCard;
