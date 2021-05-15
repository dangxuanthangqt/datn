// import { ConnectedRouter } from 'connected-react-router'
import history from 'helpers/history'
import React, { Suspense } from 'react'
import { Router } from 'react-router-dom'
import { v4 } from 'uuid'
import AuthRoute from './AuthRoute'
import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'
import { AuthRoutes, ProtectedRoutes, PublicRoutes } from './routeConfigs'

export default function Routers() {
  return (
    <Router history={history}>
      <Suspense fallback="loading">
        {
           AuthRoutes.map((item) => (
             <AuthRoute key={v4()} {...item} />
           ))
          }
        {
            PublicRoutes.map((item) => (
              <PublicRoute key={v4()} {...item} />
            ))
        }
        {
            ProtectedRoutes.map(item => (
              <ProtectedRoute key={v4()} {...item} />
            ))
        }
      </Suspense>
    </Router>

  )
}
