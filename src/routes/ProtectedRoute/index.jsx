import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route, Switch } from 'react-router-dom'
import { v4 } from 'uuid'
import { useSelector } from 'react-redux'
import { isAuthenticationSelector } from 'stores/moduleAuth/selectors'
import { routes } from 'routes/routes'

export default function ProtectedRoute(props) {
  const { layout: Layout, subRoutes } = props
  const isAuthentication = useSelector(isAuthenticationSelector)
  if (!isAuthentication) return <Redirect to={routes.loginPage.path} />
  console.log('subRoutes', subRoutes)
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
