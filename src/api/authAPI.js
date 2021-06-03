import Request from 'services/request'

export const loginAPI = (payload) => Request.post({
  url: '/login',
  data: payload,
})
