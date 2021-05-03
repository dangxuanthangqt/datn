import * as employerAPI from 'api/employerAPI'
import { toastWarning } from 'helpers/toastify'
import { get } from 'lodash'
import { fetchListEmployerOrderSuccess } from './slices'

export const fetchListEmployerOrderRequest = () => async (dispatch) => {
  try {
    const resp = await employerAPI.fetchListEmployerOrder()
    const { data } = resp
    dispatch(fetchListEmployerOrderSuccess(get(data, 'result', [])))
  } catch (error) {
    toastWarning('fetch List Employer Order fail !')
  }
}
