import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {ErrorBoundary} from 'react-error-boundary'
import { connect } from "react-redux";
import Routes from './routes'
import DEFAULT_THEME from './theme'

const errorHandler = (error, info) => {
	if(error) {
		console.debug(error)
	}else{
		console.debug(info)
	}
}

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

const App = props => {
  return(
    <MuiThemeProvider theme={DEFAULT_THEME} >
      <CssBaseline />
      <ErrorBoundary onError={errorHandler} FallbackComponent={ErrorFallback}>
				<div>
					<Routes />
				</div>
			</ErrorBoundary>
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
