import PropTypes from 'prop-types'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
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
      {/* <Redirect from="*" to="/" /> */}
    </Switch>
  )
}
ProtectedRoute.propTypes = {
  subRoutes: PropTypes.array,
}
