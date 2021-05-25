import { deleteApplyJobAPI } from 'api/candidateAPI'
import { getCvByEmployerIdAPI } from 'api/cvAPI'
import * as employerAPI from 'api/employerAPI'
import { toastSuccess, toastWarning } from 'helpers/toastify'
import { get, head } from 'lodash'
import Store from 'stores/store'

import {
  fetchListEmployerOrderSuccess,
  fetchInfoEmployerSuccess,
  fetchListEmployerSuccess,
  fetchDashboardEmployerSuccess,
  fetchlistCvAppliedSuccess,
} from './slices'

export const fetchListEmployerOrderRequest = () => async (dispatch) => {
  try {
    const resp = await employerAPI.fetchListEmployerOrder()
    const { data } = resp
    dispatch(fetchListEmployerOrderSuccess(get(data, 'result', [])))
  } catch (error) {
    toastWarning('fetch List Employer Order fail !')
  }
}

export const fetchListEmployerRequest = (payload) => async (dispatch) => {
  try {
    const resp = await employerAPI.fetchListEmployer(payload)
    const { data } = resp
    dispatch(fetchListEmployerSuccess(get(data, 'result', [])))
  } catch (error) {
    toastWarning('fetch List Employer fail !')
  }
}

export const fetchInfoEmployerRequest = (id) => async (dispatch) => {
  try {
    const resp = await employerAPI.fetchInforEmployerByUserId(id)
    const { data } = resp
    const result = head(get(data, 'result', [])) || {}
    dispatch(fetchInfoEmployerSuccess(result))
  } catch (error) {
    toastWarning('fetch info Employer fail !')
  }
}

export const dispatchFetchDashboardEmployerRequest = (id) => async (dispatch) => {
  try {
    const resp = await employerAPI.dashboardEmployerAPI(id)
    dispatch(fetchDashboardEmployerSuccess(get(resp, 'data.result', {})))
  } catch (error) {
    toastWarning('Fetch dashboard employer fail')
  }
}

export const dispatchUpdateInfoEmployerRequest = ({ id, data }) => async (dispatch) => {
  try {
    const resp = await employerAPI.updateInfoEmployerByUserIdAPI({ id, data })
    dispatch(fetchInfoEmployerRequest(id))
    toastSuccess('Cập nhật thông tin thành công !')
  } catch (error) {
    toastWarning('update infor fail')
  }
}

export const dispatchFetchListCvAppliedRequest = ({ id, ...rest }) => async (dispatch) => {
  try {
    const resp = await getCvByEmployerIdAPI({ id, ...rest })
    dispatch(fetchlistCvAppliedSuccess(get(resp, 'data.result', {})))
  } catch (error) {
    toastWarning('fetch list fail')
  }
}

export const deleteAppliedJob = (id) => async (dispatch) => {
  const { store } = Store
  const userID = get(store.getState(), 'authState.user.id')
  try {
    const resp = await deleteApplyJobAPI(id)
    dispatch(dispatchFetchListCvAppliedRequest({
      id: userID, name: '', limit: 5, page: 1,
    }))
    toastSuccess('Từ chối ứng viên thành công !')
  } catch (error) {
    toastWarning('từ chối thất bại')
  }
}
