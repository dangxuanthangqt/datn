import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import history from 'helpers/history'

import authReducer from './moduleAuth/slices'
import recruitmentReducer from './moduleRecruitment/slices'
import employerReducer from './moduleEmployer/slices'
import dataMasterReducer from './moduleDataMaster/slices'

const createRootReducer = (injectedReducers = {}) => combineReducers({
  router: connectRouter(history),
  authState: authReducer,
  recruitmentState: recruitmentReducer,
  employerState: employerReducer,
  dataMasterState: dataMasterReducer,
  ...injectedReducers,
})

export default createRootReducer
