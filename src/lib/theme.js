import { createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';

/**
 * The custom color scheme for the application.
 * @type {Object}
 */
const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
    error: red
  }
});

export default theme;
