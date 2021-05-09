import * as employerAPI from 'api/employerAPI'
import { toastWarning } from 'helpers/toastify'
import { get, head } from 'lodash'
import { fetchListEmployerOrderSuccess, fetchInfoEmployerSuccess, fetchListEmployerSuccess } from './slices'

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
