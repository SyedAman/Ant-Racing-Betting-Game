import React, { Component } from 'react';
import Typography from 'material-ui/Typography';

import NavBar from '../../components/NavBar';
import BottomNav from '../../components/BottomNav';
import Upcoming from '../Upcoming';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Top navigation. */}
        <NavBar title="Match Center" />

        <Typography type="subheading" align="left" gutterbottom>
          Upcoming Races
        </Typography>
        <Upcoming />

        {/* Bottom navigation. */}
        <BottomNav />
      </div>
    );
  }
}

export default App;
