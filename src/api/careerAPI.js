import Request from 'services/request'

export const fetchListCareerAPI = () => Request.get({
  url: '/careers',
})
