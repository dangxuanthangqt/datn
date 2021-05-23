export const routes = {
  homePage: {
    path: '/',
    build: () => '/',
  },
  recruitmentPage: {
    path: '/recruitments',
    build: () => '/recruitments',
  },
  employerPage: {
    path: '/employer',
    build: () => '/employer',
  },
  employerDetailPage: {
    path: '/employer/:id',
    build: (id) => `/employer/${id}`,
  },
  candidateDashboardPage: {
    path: '/candidate-dashboard',
    build: () => 'candidate-dashboard',
  },
  listCVPage: {
    path: '/candidate-dashboard/list-cv',
    build: () => '/candidate-dashboard/list-cv',
  },
  listJobApply: {
    path: '/candidate-dashboard/list-job',
    build: () => '/candidate-dashboard/list-job',
  },
  cvPage: {
    path: '/cv',
    build: () => '/cv',
  },
  candidatePage: {
    path: '/candidate',
    build: () => '/candidate',
  },
  loginPage: {
    path: '/login',
    build: () => '/login',
  },
  signupPage: {
    path: '/signup',
    build: () => 'signup',
  },
}
