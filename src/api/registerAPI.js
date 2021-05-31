import request from 'services/request'

export const registerEmployer = (data) => request.post({ url: 'registerEmployer', data })

export const registerCandidate = (data) => request.post({ url: 'registerCandidate', data })
