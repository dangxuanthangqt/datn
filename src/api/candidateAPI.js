/* eslint-disable radix */
import Request from 'services/request'

export const dashboardCandidateAPI = (id) => Request.get({
  url: `dashboardcandidate/${id}`,
})

export const getInfoCandidateByUserIdAPI = (id) => Request.get({
  url: `getinfocandidatebyuserid/${id}`,
})

export const updateInfoCandidateByUserIdAPI = (id, data) => Request.put({
  url: `candidates/${id}`,
  data,
})

export const getRecruimentApplyByUserIdAPI = ({
  id, vacancy, limit, page,
}) => Request.get({
  url: `getjobapplybyuserid/${id}`,
  params: { vacancy, limit, page },
})

export const deleteApplyJobAPI = (id) => Request.delete({
  url: `applyjob/${id}`,
})

export const getCandidateAPI = ({
  name, position, limit, page,
}) => Request.get(
  { url: `candidates?name=${name}&position=${position}&limit=${limit}&page=${page}` },
)

export const getDetailCandidateAPI = (id) => Request.get({ url: `candidates/${id}` })

export const getInfoEmployerAttentionAPI = (id) => Request.get({
  url: `/getinfoemployer/${id}`,
})

export const deleteEmployerAttentionAPI = ({ cvID, userID }) => Request.post({
  url: '/delelecvsave',
  data: { cv_id: cvID, user_id: parseInt(userID) },
})
