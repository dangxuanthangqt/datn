/* eslint-disable no-unused-vars */
import * as recruitmentsAPI from 'api/recruitmentsAPI'
import { toastSuccess, toastWarning } from 'helpers/toastify'
import { get, head } from 'lodash'
import {
  fetchInfoSuccess,
  fetchListRecruitmentOrderSuccess,
  fetchListRecruitmentSuccess,
  fetchDetailRecruitmentSuccess,
  fetchListRecruitmentByEmployerIDSuccess,
} from './slices'

export const fetchInformationRequest = () => async (dispatch) => {
  try {
    const resp = await recruitmentsAPI.fetchDashboard()
    const { data } = resp
    dispatch(fetchInfoSuccess(get(data, 'result', [])))
  } catch (error) {
    toastWarning('Fetch information fail')
  }
}

export const fetchListRecruitmentOrderRequest = () => async (dispatch) => {
  try {
    const resp = await recruitmentsAPI.fetchRecruitmentOrder()
    const { data } = resp
    dispatch(fetchListRecruitmentOrderSuccess(data.result))
  } catch (erorr) {
    toastWarning('Fetch list fail')
  }
}

export const fetchListRecruitment = (payload) => async (dispatch) => {
  try {
    const resp = await recruitmentsAPI.fetchListRecruiment(payload)
    const { data } = resp
    dispatch(fetchListRecruitmentSuccess(get(data, 'result', {})))
  } catch (err) {
    toastWarning('Fetch list fail')
  }
}

export const dispatchfetchLitsRecruitmentByEmployerID = (payload) => async (dispatch) => {
  try {
    const resp = await recruitmentsAPI.fetchLitsRecruitmentByEmployerID(payload)
    const { data } = resp
    dispatch(fetchListRecruitmentByEmployerIDSuccess(get(data, 'result', {})))
  } catch (err) {
    toastWarning('Fetch list fail')
  }
}

export const dispatchfetchDetailRecruitment = (payload) => async (dispatch) => {
  try {
    const resp = await recruitmentsAPI.fetchDetailRecruitment(payload)
    const { data } = resp
    const result = head(get(data, 'result', [])) || {}
    dispatch(fetchDetailRecruitmentSuccess(result))
  } catch (err) {
    toastWarning('Fetch list fail')
  }
}

export const dispatchApplyJob = (payload) => async (dispatch) => {
  try {
    const resp = await recruitmentsAPI.applyJobAPI(payload)
    toastSuccess('Ứng tuyển thành công !')
  } catch (error) {
    toastWarning('Ứng tuyển thất bại !')
  }
}
