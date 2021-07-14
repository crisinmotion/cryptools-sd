import React from 'react'
import {
  Switch,
  Redirect,
} from 'react-router-dom'

import CommonRoutes from './CommonRoutes'
import createRoutes from './utils'

const Routes = function(props) {
  return (
    <Switch>
      { createRoutes(CommonRoutes) }      
      <Redirect to={'/cryptools-sd'} />
    </Switch>
  )
}

export default Routes