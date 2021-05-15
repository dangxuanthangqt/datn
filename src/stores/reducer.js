import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import history from 'helpers/history'

import authReducer from './moduleAuth/slices'
import recruitmentReducer from './moduleRecruitment/slices'
import employerReducer from './moduleEmployer/slices'
import dataMasterReducer from './moduleDataMaster/slices'
import candidateReducer from './moduleCandidate/slices'
import cvReducer from './moduleCv/slices'

const createRootReducer = (injectedReducers = {}) => combineReducers({
  router: connectRouter(history),
  authState: authReducer,
  recruitmentState: recruitmentReducer,
  employerState: employerReducer,
  candidateState: candidateReducer,
  dataMasterState: dataMasterReducer,
  cvState: cvReducer,
  ...injectedReducers,
})

export default createRootReducer
