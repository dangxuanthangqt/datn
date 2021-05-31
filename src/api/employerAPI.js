import Request from 'services/request'

export const fetchListEmployerOrder = () => Request.get({
  url: '/getemployerorder',
})

export const fetchListEmployer = (payload) => Request.get({
  url: 'employers',
  params: { ...payload },
})

export const fetchInforEmployerById = (id) => Request.get({
  url: `employers/${id}`,
})

export const getInfoEmployerByUserIdAPI = (id) => Request.get({ url: `getinfoemployerbyuserid/${id}` })

export const dashboardEmployerAPI = (id) => Request.get({ url: `dashboardemployer/${id}` })
export const updateInfoEmployerByUserIdAPI = ({ id, data }) => Request.put({
  url: `employers/${id}`,
  data: { ...data },
})

export const attentionCVAPI = ({ userId, cvId }) => Request.post({ url: 'savecv', data: { cv_id: cvId, user_id: userId } })

export const getAttentionCV = (userId) => Request.get({ url: `getcvsavebyuserid/${userId}` })
