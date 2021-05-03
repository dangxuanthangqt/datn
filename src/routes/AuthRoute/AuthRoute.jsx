import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { isAuthenticationSelector } from 'stores/moduleAuth/selectors'
import { v4 } from 'uuid'

const AuthRoute = (props) => {
  const { layout: Layout, subRoutes } = props
  // const location = useLocation()
  const isAuthentication = useSelector(isAuthenticationSelector)
  if (isAuthentication) return <Redirect to="/" />

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
AuthRoute.propTypes = {
  layout: PropTypes.element,
  subRoutes: PropTypes.array,
}
export default AuthRoute
