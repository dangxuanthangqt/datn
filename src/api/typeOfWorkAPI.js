import request from 'services/request'

export const getTypeOfWorkAPI = () => request.get({ url: 'typeofworks' })
