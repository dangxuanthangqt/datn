import {
  dashboardCandidateAPI,
  deleteApplyJobAPI,
  deleteEmployerAttentionAPI,
  getCandidateAPI,
  getDetailCandidateAPI,
  getInfoCandidateByUserIdAPI,
  getInfoEmployerAttentionAPI,
  getRecruimentApplyByUserIdAPI,
  updateInfoCandidateByUserIdAPI,
} from 'api/candidateAPI'
import { toastSuccess, toastWarning } from 'helpers/toastify'
import { get, head } from 'lodash'
import { getAttentionCV } from 'stores/moduleEmployer/thunks'
import Store from 'stores/store'
import {
  dispatchFetchDashboardCandidateSuccess,
  dispatchFetchListRecruitmentApplySuccess,
  dispatchFetchInfoCandidateSuccess,
  dispatchFetchListCandidateSuccess,
  dispatchFetchDetailCandidateSuccess,
  dispatchFetchListEmployerAttentionSuccess,
} from './slices'

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
    dispatch(dispatchFetchInfoCandidateRequest(userID))
  } catch (error) {
    toastWarning('update info candidate fail')
  }
}

export const dispatchFetchListRecruitmentApply = (data) => async (dispatch) => {
  try {
    const resp = await getRecruimentApplyByUserIdAPI(data)
    dispatch(dispatchFetchListRecruitmentApplySuccess(get(resp, 'data.result')))
  } catch (error) {
    toastWarning('Fetch list recruitment apply fail')
  }
}

export const dispatchDeleteApplyJobRequest = (data) => async (dispatch) => {
  const { store } = Store
  const userID = get(store.getState(), 'authState.user.id')
  try {
    const resp = await deleteApplyJobAPI(data)
    dispatch(dispatchFetchListRecruitmentApply({
      id: userID, vacancy: '', limit: 5, page: 1,
    }))
    toastSuccess('Hủy thành công')
  } catch (err) {
    toastWarning('delete error')
  }
}

export const dispatchFetchListCandidate = (data) => async (dispatch) => {
  try {
    const resp = await getCandidateAPI(data)
    dispatch(dispatchFetchListCandidateSuccess(get(resp, 'data.result', {})))
  } catch (error) {
    toastWarning('Fetch list candidate fail !')
  }
}

export const dispatchFetchDetailCandidate = (id) => async (dispatch) => {
  try {
    const resp = await getDetailCandidateAPI(id)
    const result = head(get(resp, 'data.result', [])) || {}
    dispatch(dispatchFetchDetailCandidateSuccess(result))
  } catch (err) {
    toastWarning('Fetch detail fail')
  }
}

export const dispatchFetchListEmployerAttention = (id) => async (dispatch) => {
  try {
    const resp = await getInfoEmployerAttentionAPI(id)
    const result = head(get(resp, 'data.result')) || []
    dispatch(dispatchFetchListEmployerAttentionSuccess(result))
  } catch (error) {
    toastWarning('Fetch list employer attention fail')
  }
}

export const dispatchRejectEmployerAttention = ({ cvID, userID }) => async (dispatch) => {
  try {
    const resp = await deleteEmployerAttentionAPI({ cvID, userID })
    toastSuccess('Từ chối thành công !')
    dispatch(getAttentionCV(userID))
  } catch (error) {
    toastWarning('Từ chối thất bại!')
  }
}
