import React, { Component } from 'react';

import NavBar from '../../components/NavBar'
import BottomNav from '../../components/BottomNav'
import Upcoming from '../Upcoming'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar title="Match Center" />
        <Upcoming />
        <BottomNav />
      </div>
    )
  }
}

export default App;
