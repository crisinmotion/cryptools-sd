import React from 'react'
import get from 'lodash/get'
import {
  Switch,
  Redirect,
} from 'react-router-dom'

import { useSelector } from 'react-redux'
import CommonRoutes from './CommonRoutes'
import createRoutes from './utils'

const Routes = function(props) {
  return (
    <Switch>
      { createRoutes(CommonRoutes) }      
      <Redirect to={'/hello'} />
    </Switch>
  )
}

export default Routes