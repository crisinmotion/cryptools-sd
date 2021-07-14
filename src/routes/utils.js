import React from 'react'

import { Route } from 'react-router-dom'

const createRoutes = (routes) => {
  return routes.map((route, key) => {
    const { component: Component, layout: Layout, ...rest } = route      

    return (
      <Route key={key} {...rest}
        render={matchProps => {
          return (
            <Layout>
              <Component {...matchProps} />
            </Layout>
          )
        }}
      />
    )
  })
}

export default createRoutes