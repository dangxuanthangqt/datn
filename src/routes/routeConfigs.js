import { lazy } from 'react'

import ClientLayout from 'layouts/ClientLayout'
import roles from 'constants/roles'
import { routes } from './routes'

export const AuthRoutes = [
  {
    layout: ClientLayout,
    subRoutes: [
      {
        title: 'Đăng ký',
        key: 'login',
        exact: true,
        path: routes.loginPage.path,
        component: lazy(() => import('containers/Client/LoginPage')),
      },
      {
        title: 'Đăng nhập',
        key: 'signup',
        exact: true,
        path: routes.signupPage.path,
        component: lazy(() => import('containers/Client/SignupPage')),
      },
    ],
  },
]
export const PublicRoutes = [
  {
    layout: ClientLayout,
    subRoutes: [
      {
        title: 'Trang chủ',
        key: 'home',
        path: routes.homePage.path,
        exact: true,
        component: lazy(() => import('containers/Client/HomePage')),
      },
    ],
  },
]
export const protectedRoutes = [
  {
    layout: 'CandidateDashBroad',
    subroutes: [
      {
        key: 'candidate-dashbroad',
        path: '/candidate-dashbroad',
        exact: true,
      //  component: lazy(() => import('../app/Containers/Client/CandidateDashbroad')),
      },
      {
        key: 'list-job-apply',
        path: '/candidate-dashbroad/list-job',
        exact: true,
        //   component: lazy(() => import('../app/Containers/Client/C
        // andidateDashbroad/component/ListJobApply')),
      },
      {
        key: 'list-cv',
        path: '/candidate-dashbroad/list-cv',
        exact: true,
        //    component: lazy(() => import('../app/Conta
        // iners/Client/CandidateDashbroad/component/ListCv')),
      },
    ],
    permission: [
      roles.Candidate,
    ],
  },
]
