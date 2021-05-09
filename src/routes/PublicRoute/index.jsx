import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { v4 } from 'uuid'

export default function ProtectedRoute(props) {
  const { layout: Layout, subRoutes } = props
  return (
    <Switch>
      {
         subRoutes.map((item) => (
           <Route
             key={v4()}
             path={item.path}
             exact={item.exact}
             render={() => (
               <Layout>
                 <item.component />
               </Layout>
             )}
           />
         ))
      }
    </Switch>
  )
}
ProtectedRoute.propTypes = {
  layout: PropTypes.element,
  subRoutes: PropTypes.array,
}
