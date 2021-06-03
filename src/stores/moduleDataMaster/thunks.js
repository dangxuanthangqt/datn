import { fetchListCareerAPI } from 'api/careerAPI'
import { fetchListCityAPI } from 'api/cityAPI'
import { fetchListRankAPI } from 'api/rankAPI'
import { getSalaryAPI } from 'api/salaryAPI'
import { getTypeOfWorkAPI } from 'api/typeOfWorkAPI'
import { toastWarning } from 'helpers/toastify'
import { get } from 'lodash'
import {
  fetchListCitySuccess,
  fetchListRankSuccess,
  fetchListCareerSuccess,
  fetchListSalarySuccess,
  fetchListTypeOfWorkSuccess,
} from './slices'

export const dispatchFetchListCity = () => async (dispatch) => {
  try {
    const resp = await fetchListCityAPI()
    const { data } = resp
    dispatch(fetchListCitySuccess(get(data, 'result')))
  } catch (error) {
    toastWarning('fetch list city fail')
  }
}
export const dispatchFetchListRank = () => async (dispatch) => {
  try {
    const resp = await fetchListRankAPI()
    const { data } = resp
    dispatch(fetchListRankSuccess(get(data, 'result')))
  } catch (error) {
    toastWarning('fetch list rank fail')
  }
}
export const dispatchFetchListCareer = () => async (dispatch) => {
  try {
    const resp = await fetchListCareerAPI()
    const { data } = resp
    dispatch(fetchListCareerSuccess(get(data, 'result')))
  } catch (error) {
    toastWarning('fetch list career fail')
  }
}

export const dispatchFetchListSalary = () => async (dispatch) => {
  try {
    const resp = await getSalaryAPI()
    const { data } = resp
    dispatch(fetchListSalarySuccess(get(data, 'result')))
  } catch (error) {
    toastWarning('fetch list career fail')
  }
}

export const dispatchFetchListTypeOfWork = () => async (dispatch) => {
  try {
    const resp = await getTypeOfWorkAPI()
    const { data } = resp
    dispatch(fetchListTypeOfWorkSuccess(get(data, 'result')))
  } catch (error) {
    toastWarning('fetch list career fail')
  }
}
