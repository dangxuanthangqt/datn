import Request from 'services/request'

export const fetchListEmployerOrder = () => Request.get({
  url: '/getemployerorder',
})
