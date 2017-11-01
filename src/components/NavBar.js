import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';

/**
 * The top navigation bar displaying important user actions and navigation.
 * @method NavBar
 * @param  {Object} props - Passed down data in the form of properties.
 */
const NavBar = (props) => (
  <AppBar
    position="static"
    color="primary"
  >
    <Toolbar>
      <Typography type="title" color="inherit">
        {props.title}
      </Typography>
    </Toolbar>
  </AppBar>
);

export default NavBar;
