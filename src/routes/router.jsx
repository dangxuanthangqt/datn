// import { ConnectedRouter } from 'connected-react-router'
import { getAllowedRoutes } from 'helpers/getAllowedRoutes'
import history from 'helpers/history'
import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import {
  Redirect, Route, Router, Switch,
} from 'react-router-dom'
import { permissionSelector } from 'stores/moduleAuth/selectors'
import { v4 } from 'uuid'
import AuthRoute from './AuthRoute'
import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'
import { AuthRoutes, ProtectedRoutes, PublicRoutes } from './routeConfigs'

export default function Routers() {
  const roles = useSelector(permissionSelector)
  const ProtectedRoutesAllow = getAllowedRoutes(ProtectedRoutes, roles)
  return (
    <Router history={history}>
      <Suspense fallback="loading">
        {
           AuthRoutes.map((item) => (
             <AuthRoute key={v4()} {...item} />
           ))
          }

        {
            ProtectedRoutesAllow.map(item => (
              <ProtectedRoute key={v4()} {...item} />
            ))
        }
        {
            PublicRoutes.map((item) => (
              <PublicRoute key={v4()} {...item} />
            ))
        }

      </Suspense>
    </Router>

  )
}
