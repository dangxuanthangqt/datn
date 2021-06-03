import request from 'services/request'

export const getSalaryAPI = () => request.get({ url: 'salaries' })
