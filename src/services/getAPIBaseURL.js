import { Enviroment } from 'constants/enviroments'

const env = process.env.REACT_APP_APPLICATION_ENV

const getAPIBaseURL = () => {
  if (env === Enviroment.Development) return 'http://127.0.0.1:8000/api'
  if (env === Enviroment.Production) return 'http://localhost:3000/api/v1asdasds'
  return `${window.location.origin}/api/v1`
}

export default getAPIBaseURL
