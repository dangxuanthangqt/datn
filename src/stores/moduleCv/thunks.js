import {
  addCvAPI, deleteCvAPI, getCvByUserIdAPI, getDetailCvAPI,
} from 'api/cvAPI'
import { push } from 'connected-react-router'
import { toastSuccess, toastWarning } from 'helpers/toastify'
import { get, head } from 'lodash'
import Store from 'stores/store'
import { fetchListCvByUserSuccess, fetchDetailCvSuccess } from './slices'

export const dispatchFetchCvByUserIdRequest = (id) => async (dispatch) => {
  try {
    const resp = await getCvByUserIdAPI(id)
    const { data } = resp
    dispatch(fetchListCvByUserSuccess(get(data, 'result')))
  } catch (err) {
    toastWarning('Fetch list CV by user ID fail')
  }
}

export const dispatchAddCVRequest = (payload) => async (dispatch) => {
  try {
    // eslint-disable-next-line no-unused-vars
    const resp = await addCvAPI(payload)

    toastSuccess('Thêm CV thành công')
    dispatch(push('/candidate-dashboard/list-cv'))
  } catch (err) {
    toastWarning('addCV fail')
  }
}

export const dispatchDeleteCvRequest = (id) => async (dispatch) => {
  const { store } = Store
  const userID = get(store.getState(), 'authState.user.id')
  try {
    // eslint-disable-next-line no-unused-vars
    const resp = await deleteCvAPI(id)
    toastSuccess('Xóa CV thành công')
    dispatch(dispatchFetchCvByUserIdRequest(userID))
  } catch (error) {
    toastWarning('Xóa Cv thất bại')
  }
}

export const dispatchFetchDetailCvRequest = (id) => async (dispatch) => {
  try {
    const resp = await getDetailCvAPI(id)
    const { data } = resp
    let result = head(get(data, 'result'))
    result = {
      ...result,
      object: JSON.parse(result.object),
    }
    dispatch(fetchDetailCvSuccess(result))
  } catch (error) {
    console.log('error', error)
    toastWarning('Lấy thông tin chi tiết thất bại')
  }
}
