import get from 'lodash/get'
import { push } from 'connected-react-router'

import * as authAPI from 'api/authAPI'
import { hideLoading, showLoading } from 'stores/moduleGlobalLoading/slices'
import { decodeJWT } from 'helpers/decodeJWT'
import { toastSuccess, toastWarning } from 'helpers/toastify'
import { registerCandidate, registerEmployer } from 'api/registerAPI'
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
    toastWarning('Có lỗi xảy ra, xin vui lòng kiểm tra lại !')
    dispatch(loginFailure())
    dispatch(hideLoading())
  }
}

export const dispatchRegisterEmployer = (data) => async (dispatch) => {
  try {
    await registerEmployer(data)
    dispatch(push('/login'))
    toastSuccess('Đăng ký nhà tuyển dụng thành công !')
  } catch (error) {
    toastWarning('Đăng ký thất bại!')
  }
}
export const dispatchRegisterCandidate = (data) => async (dispatch) => {
  try {
    await registerCandidate(data)
    toastSuccess('Đăng ký nhà ứng viên thành công !')
    dispatch(push('/login'))
  } catch (error) {
    toastWarning('Đăng ký thất bại!')
  }
}
