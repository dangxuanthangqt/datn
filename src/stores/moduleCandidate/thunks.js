import { dashboardCandidateAPI, getInfoCandidateByUserIdAPI, updateInfoCandidateByUserIdAPI } from 'api/candidateAPI'
import { toastWarning } from 'helpers/toastify'
import { get, head } from 'lodash'
import Store from 'stores/store'
import { dispatchFetchDashboardCandidateSuccess, dispatchFetchInfoCandidateSuccess } from './slices'

export const dispatchFetchDashboardCandidateRequest = (id) => async (dispatch) => {
  try {
    const resp = await dashboardCandidateAPI(id)
    const result = get(resp, 'data.result', {})
    dispatch(dispatchFetchDashboardCandidateSuccess(result))
  } catch (error) {
    toastWarning('Fetch dashboard candicate fail')
  }
}

export const dispatchFetchInfoCandidateRequest = (id) => async (dispatch) => {
  try {
    const resp = await getInfoCandidateByUserIdAPI(id)
    const result = head(get(resp, 'data.result', [])) || {}
    dispatch(dispatchFetchInfoCandidateSuccess(result))
  } catch (err) {
    toastWarning('fetch info candidate fail')
  }
}

export const dispatchUpdateInfoCandidateRequest = (id, data) => async (dispatch) => {
  const { store } = Store
  const userID = get(store.getState(), 'authState.user.id')
  try {
    const resp = await updateInfoCandidateByUserIdAPI(id, data)
    console.log('resp', resp)
    dispatch(dispatchFetchInfoCandidateRequest(userID))
  } catch (error) {
    toastWarning('update info candidate fail')
  }
}
