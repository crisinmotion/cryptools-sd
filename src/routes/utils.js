import React from 'react'
import { Route } from 'react-router-dom'
import About from '../containers/About'

const createRoutes = (routes, settings) => {
  return routes.map((route, key) => {
    const { component: Component, layout: Layout, ...rest } = route      
		console.log(settings, 'routes')
    return (
      <Route key={key} {...rest}
        render={ matchProps => {
          return (
            <Layout>
              { settings && settings.activeMenu && settings.activeMenu === 'cryptoblades' &&
								<Component {...matchProps} />
							}

							{ settings && settings.activeMenu && settings.activeMenu === 'about' &&
								<About  {...matchProps} />
							}
            </Layout>
          )
        }}
      />
    )
  })
}

export default createRoutes