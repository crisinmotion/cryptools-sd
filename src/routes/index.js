import React from 'react'
import { connect } from "react-redux";
import {
  Switch,
  Redirect,
} from 'react-router-dom'

import CommonRoutes from './CommonRoutes'
import createRoutes from './utils'

const Routes = (props) => {
  return (
    <Switch>
      { createRoutes(CommonRoutes, props.settings) }      
      <Redirect to={'/cryptools-sd'} />
    </Switch>
  )
}

// export default Routes

const mapStateToProps = state => {
  return {
    settings: state.settings
  };
};

export default connect(
  mapStateToProps,
)(Routes);