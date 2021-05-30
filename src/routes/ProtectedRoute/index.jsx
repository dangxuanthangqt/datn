import { push } from 'connected-react-router'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { routes } from 'routes/routes'
import { isAuthenticationSelector } from 'stores/moduleAuth/selectors'
import { v4 } from 'uuid'

export default function ProtectedRoute(props) {
  const { layout: Layout, subRoutes } = props
  const isAuthentication = useSelector(isAuthenticationSelector)
  // if (!isAuthentication) return <Redirect to={routes.loginPage.path} />
  // useEffect(() => {
  //   if (!isAuthentication) useDispatch(push(routes.loginPage.path))
  // }, [])
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
    </Switch>
  )
}
ProtectedRoute.propTypes = {
  subRoutes: PropTypes.array,
}
