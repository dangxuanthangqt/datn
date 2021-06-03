import request from 'services/request'

export const dashboardAdminAPI = () => request.get({ url: 'dashboardadmin' })

export const getRecruitmentAdminAPI = () => request.get({ url: 'getrecruitmentadmin' })

export const changeActiveRecruitmentAPI = (id) => request.put({ url: `changeactiverecruitment/${id}` })

export const changeOrderRecruitmentAPI = (id) => request.put({ url: `changeorderrecruitment/${id}` })

export const getEmployerAdminAPI = () => request.get({ url: 'getemployeradmin' })

export const changeActiveEmployerAPI = (id) => request.put({ url: `changeactiveemployer/${id}` })

export const changeOrderEmployerAPI = (id) => request.put({ url: `changeorderemployer/${id}` })

export const getCandidateAdminAPI = () => request.get({ url: 'getcandidateadmin' })

export const changeActiveCandidateAPI = (id) => request.put({ url: `changeactivecandidate/${id}` })
