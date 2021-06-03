import Request from 'services/request'

export const addCvAPI = (payload) => Request.post({
  url: '/cv',
  data: payload,
})

export const getCvByUserIdAPI = (id) => Request.get({ url: `/getcvbyuserid/${id}` })

export const getCvByCandidateIdAPI = (id) => Request.get({ url: `/getcv/${id}` })

export const getDetailCvAPI = (id) => Request.get({ url: `/cv/${id}` })

export const updateCvAPI = (id, data) => Request.put({ url: `/cv/${id}`, data })

export const deleteCvAPI = (id) => Request.delete({ url: `/cv/${id}` })

export const getCvByEmployerIdAPI = ({ id, ...rest }) => Request.get({ url: `/getcvsbyuserid/${id}`, params: { ...rest } })

export const deleteJobApplied = (id) => Request.delete({ url: `/applyjob/${id}` })
