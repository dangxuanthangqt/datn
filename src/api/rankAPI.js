import Request from 'services/request'

export const fetchListRankAPI = () => Request.get({
  url: '/ranks',
})
