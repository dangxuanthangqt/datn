import Request from 'services/request'

export const fetchListCityAPI = (payload) => Request.get({
  url: '/cites',
  data: payload,
})
