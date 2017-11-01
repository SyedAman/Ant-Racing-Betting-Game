import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { MuiThemeProvider } from 'material-ui/styles';

import theme from '../../lib/theme';
import NavBar from '../../components/NavBar';
import BottomNav from '../../components/BottomNav';
import Upcoming from '../Upcoming';

class App extends Component {
  render() {
    return (
      // inject custom theme
      <MuiThemeProvider theme={theme}>
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
      </MuiThemeProvider>
    );
  }
}

export default App;
