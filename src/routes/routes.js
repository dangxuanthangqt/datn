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
  employerDashboardPage: {
    path: '/employer-dashboard',
    build: () => '/employer-dashboard',
  },
  listJobPage: {
    path: '/employer-dashboard/list-job',
    build: () => '/employer-dashboard/list-job',
  },
  addJobPage: {
    path: '/employer-dashboard/add-recruitment',
    build: () => '/employer-dashboard/add-recruitment',
  },
  updateJobPage: {
    path: '/employer-dashboard/list-job/edit/:id',
    build: () => '/employer-dashboard/list-job/edit/:id',
  },
  listCandidatePage: {
    path: '/employer-dashboard/list-candidate',
    build: () => '/employer-dashboard/list-candidate',
  },
  listCvAttentionPage: {
    path: '/employer-dashboard/list-cv-attention',
    build: () => '/employer-dashboard/list-cv-attention',
  },
  listEmployerAttentionPage: {
    path: '/candidate-dashboard/list-employer-attention',
    build: () => '/candidate-dashboard/list-employer-attention',
  },
  adminDashBoardPage: {
    path: '/admin-dashboard',
    build: () => '/admin-dashboard',
  },
  adminListRecruitmentPage: {
    path: '/admin-dashboard/list-recruitment',
    build: () => '/admin-dashboard/list-recruitment',
  },
  adminListEmployerPage: {
    path: '/admin-dashboard/list-employer',
    build: () => '/admin-dashboard/list-employer',
  },
  adminListCandidatePage: {
    path: '/admin-dashboard/list-candidate',
    build: () => '/admin-dashboard/list-candidate',
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
