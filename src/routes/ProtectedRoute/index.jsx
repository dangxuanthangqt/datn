import PropTypes from 'prop-types'
import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { routes } from 'routes/routes'
import { isAuthenticationSelector } from 'stores/moduleAuth/selectors'
import { v4 } from 'uuid'

export default function ProtectedRoute(props) {
  const { layout: Layout, subRoutes } = props
  const isAuthentication = useSelector(isAuthenticationSelector)

  return (
    <Switch>
      {
         subRoutes.map((item) => (
           <Route
             key={v4()}
             path={item.path}
             exact={item.exact}
             render={() => {
               if (!isAuthentication) return <Redirect to={routes.loginPage.path} />
               return (
                 <Layout>
                   <item.component />
                 </Layout>
               )
             }}
           />
         ))
      }
      <Route path="*" exact render={() => <Redirect to="/" />} />
      {/* bo cai nay cuoi cung */}
    </Switch>
  )
}
ProtectedRoute.propTypes = {
  subRoutes: PropTypes.array,
}
