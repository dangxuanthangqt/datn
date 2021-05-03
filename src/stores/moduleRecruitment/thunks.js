import * as recruitmentsAPI from 'api/recruitmentsAPI'
import { toastWarning } from 'helpers/toastify'
import { get } from 'lodash'
import {
  fetchInfoSuccess,
  fetchListRecruitmentOrderSuccess,
  fetchListRecruitmentSuccess,
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
    dispatch(fetchListRecruitmentOrderSuccess(get(data, 'result', [])))
  } catch (erorr) {
    toastWarning('Fetch list fail')
  }
}

export const fetchListRecruitment = (payload) => async (dispatch) => {
  try {
    const resp = await recruitmentsAPI.fetchRecruitment(payload)
    const { data } = resp
    dispatch(fetchListRecruitmentSuccess(get(data, 'result', {})))
  } catch (err) {
    toastWarning('Fetch list fail')
  }
}
