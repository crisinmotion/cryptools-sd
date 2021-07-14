import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";

import { connect } from "react-redux";
import Routes from './routes'
import DEFAULT_THEME from './theme'

const App = props => {
  return(
    <MuiThemeProvider theme={DEFAULT_THEME}>
      <CssBaseline />
      <div>
        <Routes />
      </div>
    </MuiThemeProvider>
  )
}

const mapStateToProps = state => {
  return {
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
