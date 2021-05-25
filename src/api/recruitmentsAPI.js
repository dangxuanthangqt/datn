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
export const fetchLitsRecruitmentByUserID = (data) => Request.get({
  url: `getrecruitmentsbyuserid/${data.id}`,
  params: { ...omit(data, 'id') },
})

export const fetchDetailRecruitment = (id) => Request.get({
  url: `recruitments/${id}`,
})

export const applyJobAPI = (data) => Request.post({
  url: 'applyjob',
  data,
})

export const getRecruitmentEditAPI = (id) => Request.get({ url: `getrecruitmentedit/${id}` })

export const addRecruitmentAPI = (data) => Request.post({ url: 'recruitments', data })

export const updateRecruitmentAPI = (id, data) => Request.put({ url: `recruitments/${id}`, data })

export const deleteRecruitmentAPI = (id) => Request.delete({ url: `recruitments/${id}` })
