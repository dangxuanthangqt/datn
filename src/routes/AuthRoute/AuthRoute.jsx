import React from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'

const AuthRoute = (props) => {
  const location = useLocation()
  const { layout: Layout, subRoutes } = props
  const isLogin = true
  if (!isLogin) return <Redirect to={{ pathname: '/', state: { from: location.pathname } }} />
  return subRoutes.map((item) => (
    <Route
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

export default AuthRoute
