import { push } from 'connected-react-router'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { routes } from 'routes/routes'
import { isAuthenticationSelector } from 'stores/moduleAuth/selectors'
import { v4 } from 'uuid'

const AuthRoute = (props) => {
  const { layout: Layout, subRoutes } = props
  const isAuthentication = useSelector(isAuthenticationSelector)
  // eslint-disable-next-line consistent-return
  const dispatch = useDispatch()
  useEffect(() => {
    if (isAuthentication) dispatch(push(routes.homePage.path))
  }, [])
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
