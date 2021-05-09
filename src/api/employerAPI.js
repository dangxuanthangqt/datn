import Request from 'services/request'

export const fetchListEmployerOrder = () => Request.get({
  url: '/getemployerorder',
})

export const fetchListEmployer = (payload) => Request.get({
  url: 'employers',
  params: { ...payload },
})

export const fetchInforEmployerByUserId = (id) => Request.get({
  url: `employers/${id}`,
})
