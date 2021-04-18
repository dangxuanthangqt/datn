import axios from 'axios'
import { StatusCode } from 'constants/statusCode'
import qs from 'qs'
import getAPIBaseURL from './getAPIBaseURL'

const axiosInstance = axios.create({
  baseURL: getAPIBaseURL(),
  withCredentials: true,
  timeout: 60000,
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'brackets' }),
})

axiosInstance.interceptors.request.use(config => {
  const user = JSON.parse(localStorage.getItem('user'))
  if (user && user.accessToken) {
    const accessToken = `Bearer ${user.accessToken}`
    config.headers.Authorization = accessToken
  }
  return config
},
error => Promise.reject(error))
class Request {
  get(config) {
    return this.execute({ method: 'get', ...config })
  }

  post(config) {
    return this.execute({ method: 'post', ...config })
  }

  put(config) {
    return this.execute({ method: 'put', ...config })
  }

  patch(config) {
    return this.execute({ method: 'patch', ...config })
  }

  delete(config) {
    return this.execute({ method: 'delete', ...config })
  }

  async execute(config) {
    try {
      const response = await axiosInstance(config)
      return {
        data: response.data,
        status: response.status,
      }
    } catch (error) {
      const normalizeError = this.handleError(error)
      return Promise.reject(normalizeError)
    }
  }

  handleErrror(error) {
    const { status, data } = error.response ?? {}
    if (!!error.response || !status) {
      return {
        status,
        data: {},
      }
    }
    if (
      status === StatusCode.Forbidden
      && !/login/.test(window.location.pathname)
    ) {
      window.location.replace('test')
    }
    if (status >= StatusCode.InternalServerError) {
      console.log('Internal Server Error')

      return { status, data: {} }
    }
    return { status, data }
  }
}
export default new Request()
