import { lazy } from 'react'

import ClientLayout from 'layouts/ClientLayout'
import CandidateDashboard from 'layouts/CandidateDashboard'
import EmployerDashboard from 'layouts/EmployerDashBoard'
import roles from 'constants/roles'
import CV from 'layouts/CV'
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
      {
        title: 'Việc làm',
        key: 'recruitment',
        path: routes.recruitmentPage.path,
        exact: true,
        component: lazy(() => import('containers/Client/RecruitmentPage')),
      },
      {
        title: 'Nhà tuyển dụng',
        key: 'employer',
        path: routes.employerPage.path,
        exact: true,
        component: lazy(() => import('containers/Client/EmployerPage')),
      },
      {
        title: 'Chi tiết nhà tuyển dụng',
        key: 'employer/id',
        path: routes.employerDetailPage.path,
        exact: true,
        component: lazy(() => import('containers/Client/EmployerPage/components/EmployerDetail')),
      },
      {
        title: 'Ung vien',
        key: 'candidate',
        path: routes.candidatePage.path,
        exact: true,
        component: lazy(() => import('containers/Client/CandidatePage')),
      },
    ],
  },
]
export const ProtectedRoutes = [
  {
    layout: CandidateDashboard,
    subRoutes: [
      {
        title: 'Quản lý thông tin ',
        key: 'candidate-dashboard',
        path: routes.candidateDashboardPage.path,
        exact: true,
        component: lazy(() => import('containers/Client/CandidateDashboard')),
      },
      {
        title: 'Danh sach CV',
        key: 'candidate-dashboard/list-cv',
        path: routes.listCVPage.path,
        exact: true,
        component: lazy(() => import('containers/Client/CandidateDashboard/components/ListCv')),
      },
      {
        title: 'Danh sach cong viec',
        key: 'candidate-dashboard/list-job',
        path: routes.listJobApply.path,
        exact: true,
        component: lazy(() => import('containers/Client/CandidateDashboard/components/ListJobApply')),
      },

    ],
    permission: [
      roles.Candidate,
    ],
  },
  {
    layout: CV,
    subRoutes: [
      {
        title: 'Tạo CV ',
        key: 'cv',
        path: routes.cvPage.path,
        exact: true,
        component: lazy(() => import('containers/CV')),
      },
    ],
    permission: [
      roles.Candidate,
    ],
  },
  {
    layout: EmployerDashboard,
    subRoutes: [
      {
        title: 'Main',
        key: 'ep main',
        path: routes.employerDashboardPage.path,
        exact: true,
        component: lazy(() => import('containers/Client/EmployerDashboard')),
      },
      {
        title: 'Tin tuyển dụng',
        key: 'list job',
        path: routes.listJobPage.path,
        exact: true,
        component: lazy(() => import('containers/Client/EmployerDashboard/components/ListJobEmployer')),
      },
      {
        title: 'Thêm tin tuyển dụng',
        key: 'Add job',
        path: routes.addJobPage.path,
        exact: true,
        component: lazy(() => import('containers/Client/EmployerDashboard/components/AddJob')),
      },
      {
        title: 'Cap nhat tin tuyển dụng',
        key: 'update job',
        path: routes.updateJobPage.path,
        exact: true,
        component: lazy(() => import('containers/Client/EmployerDashboard/components/EditJob')),
      },
      {
        title: 'Danh sach ung tuyen',
        key: 'list candidate',
        path: routes.listCandidatePage.path,
        exact: true,
        component: lazy(() => import('containers/Client/EmployerDashboard/components/ListCandidate')),
      },
    ],
    permission: [
      roles.Employer,
    ],
  },
]
