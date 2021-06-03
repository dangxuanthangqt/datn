import {
  changeActiveCandidateAPI,
  changeActiveEmployerAPI,
  changeActiveRecruitmentAPI,
  changeOrderEmployerAPI,
  changeOrderRecruitmentAPI,
  dashboardAdminAPI,
  getCandidateAdminAPI,
  getEmployerAdminAPI,
  getRecruitmentAdminAPI,
} from 'api/adminAPI'
import { toastSuccess, toastWarning } from 'helpers/toastify'
import { get } from 'lodash'
import {
  fetcDashBoardAdminSuccess,
  fetchCandidateAdminSuccess,
  fetchEmployerAdminSuccess,
  fetchRecruitmentAdminSuccess,
} from './slices'

export const dispatchFetchDashBoardAdminRequest = () => async (dispatch) => {
  try {
    const resp = await dashboardAdminAPI()
    dispatch(fetcDashBoardAdminSuccess(get(resp, 'data.result', {})))
  } catch (error) {
    toastWarning('Get dashboard admin fail')
  }
}

export const dispatchFetchRecruitmentAdminRequest = () => async (dispatch) => {
  try {
    const resp = await getRecruitmentAdminAPI()
    dispatch(fetchRecruitmentAdminSuccess(get(resp, 'data.result', [])))
  } catch (error) {
    toastWarning('Fetch list recruitment admin fail')
  }
}

export const dispatchChangeActiveRequest = (id) => async (dispatch) => {
  try {
    const resp = await changeActiveRecruitmentAPI(id)
    dispatch(dispatchFetchRecruitmentAdminRequest())
    toastSuccess('Thay đổi thành công !')
  } catch (error) {
    toastWarning('Change active fail')
  }
}

export const dispatchChangeOderRequest = (id) => async (dispatch) => {
  try {
    const resp = await changeOrderRecruitmentAPI(id)
    dispatch(dispatchFetchRecruitmentAdminRequest())
    toastSuccess('Thay đổi thành công !')
  } catch (error) {
    toastWarning('Change order fail')
  }
}

export const dispatchFetchEmployerAdminRequest = () => async (dispatch) => {
  try {
    const resp = await getEmployerAdminAPI()
    dispatch(fetchEmployerAdminSuccess(get(resp, 'data.result', [])))
  } catch (error) {
    toastWarning('Fetch list Employer admin fail')
  }
}

export const dispatchChangeActiveEmployerRequest = (id) => async (dispatch) => {
  try {
    const resp = await changeActiveEmployerAPI(id)
    dispatch(dispatchFetchEmployerAdminRequest())
    toastSuccess('Thay đổi thành công !')
  } catch (error) {
    toastWarning('Change active fail')
  }
}

export const dispatchChangeOderEmployerRequest = (id) => async (dispatch) => {
  try {
    const resp = await changeOrderEmployerAPI(id)
    dispatch(dispatchFetchEmployerAdminRequest())
    toastSuccess('Thay đổi thành công !')
  } catch (error) {
    toastWarning('Change order fail')
  }
}

export const dispatchFetchCandidateAdminRequest = () => async (dispatch) => {
  try {
    const resp = await getCandidateAdminAPI()
    dispatch(fetchCandidateAdminSuccess(get(resp, 'data.result', [])))
  } catch (error) {
    toastWarning('Fetch list Candidate admin fail')
  }
}

export const dispatchChangeActiveCandidateRequest = (id) => async (dispatch) => {
  try {
    const resp = await changeActiveCandidateAPI(id)
    dispatch(dispatchFetchCandidateAdminRequest())
    toastSuccess('Thay đổi thành công !')
  } catch (error) {
    toastWarning('Change active fail')
  }
}
