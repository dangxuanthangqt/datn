import { omit } from 'lodash'
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

export const fetchLitsRecruitmentByEmployerID = (data) => Request.get({
  url: `getrecruitmentsbyemployerid/${data.id}`,
  params: { ...omit(data, 'id') },
})

export const fetchDetailRecruitment = (id) => Request.get({
  url: `recruitments/${id}`,
})

export const applyJobAPI = (data) => Request.post({
  url: 'applyjob',
  data,
})
