// import { ConnectedRouter } from 'connected-react-router'
import history from 'helpers/history'
import React, { Suspense } from 'react'
import { Switch, Router } from 'react-router-dom'

import AuthRoute from './AuthRoute/AuthRoute'
import { AuthRoutes } from './routeConfigs'

export default function Routers() {
  return (
    <Router history={history}>
      <Suspense fallback="loading">
        <Switch>
          {
           AuthRoutes.map((item) => (
             <AuthRoute {...item} />
           ))
          }
        </Switch>
      </Suspense>

    </Router>

  )
}
