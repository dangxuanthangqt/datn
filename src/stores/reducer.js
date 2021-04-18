import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import history from 'helpers/history'

const createRootReducer = (injectedReducers = {}) => combineReducers({
  router: connectRouter(history),
  ...injectedReducers,
})

export default createRootReducer
