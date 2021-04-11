import { Enviroment } from './constants'

const env = process.env.REACT_APP_APPLICATION_ENV

const getAPIBaseURL = () => {
  if (env === Enviroment.Development) return 'http://localhost:3000/api/v1'
  if (env === Enviroment.Production) return 'http://localhost:3000/api/v1'
  return `${window.location.origin}/api/v1`
}

export default getAPIBaseURL
