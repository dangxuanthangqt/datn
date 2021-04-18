import { lazy } from 'react'

import ClientLayout from 'layouts/ClientLayout'
import { routes } from './routes'

export const AuthRoutes = [
  {
    layout: ClientLayout,
    subRoutes: [
      {
        title: 'Đăng ký',
        key: 'login',
        exact: true,
        path: routes.login.path,
        component: lazy(() => import('containers/Client/LoginPage')),
      },
      {
        title: 'Đăng nhập',
        key: 'signup',
        exact: true,
        path: routes.signup.path,
        component: lazy(() => import('containers/Client/SignupPage')),
      },
    ],
  },
]
