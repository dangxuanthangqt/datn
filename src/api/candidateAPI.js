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
