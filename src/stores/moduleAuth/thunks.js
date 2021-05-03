import get from 'lodash/get'
import { push } from 'connected-react-router'

import * as authAPI from 'api/authAPI'
import { hideLoading, showLoading } from 'stores/moduleGlobalLoading/slices'
import { decodeJWT } from 'helpers/decodeJWT'
import { toastSuccess } from 'helpers/toastify'
import { loginFailure, loginSuccess, setJwtDecode } from './slices'

export const loginUserRequest = (payload) => async (dispatch) => {
  dispatch(showLoading())
  try {
    const resp = await authAPI.loginAPI(payload)
    dispatch(loginSuccess(get(resp, 'data.result')))
    dispatch(setJwtDecode(decodeJWT(get(resp, 'data.result.accessToken', {}))))
    dispatch(hideLoading())
    toastSuccess('Đăng nhập thành công !')
    dispatch(push('/'))
  } catch (error) {
    dispatch(loginFailure())
    dispatch(hideLoading())
  }
}
