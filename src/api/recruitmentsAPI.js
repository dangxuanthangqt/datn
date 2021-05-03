import Request from 'services/request'

export const fetchDashboard = () => Request.get({
  url: '/dashboard',
})

export const fetchRecruitmentOrder = () => Request.get({
  url: '/getrecruitmentorder',
})

export const fetchListRecruiment = (data) => Request.get({
  url: 'recruitments',
  params: {
    ...data,
  },
})
