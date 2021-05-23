import PropTypes from 'prop-types'
import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { routes } from 'routes/routes'
import { isAuthenticationSelector } from 'stores/moduleAuth/selectors'
import { v4 } from 'uuid'

const AuthRoute = (props) => {
  const { layout: Layout, subRoutes } = props
  const isAuthentication = useSelector(isAuthenticationSelector)
  // eslint-disable-next-line consistent-return
  // const dispatch = useDispatch()
  // // useEffect(() => {
  // //   if (isAuthentication) {
  // //     console.log('dasd')
  // //     dispatch(push(routes.homePage.path))
  // //   }
  // // }, [])
  return (
    <Switch>
      {
        subRoutes.map((item) => (
          <Route
            key={v4()}
            path={item.path}
            exact={item.exact}
            render={() => {
              if (isAuthentication) return <Redirect to={routes.homePage.path} />
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
AuthRoute.propTypes = {
  subRoutes: PropTypes.array,
}
export default AuthRoute
