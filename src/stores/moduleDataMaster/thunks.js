import { fetchListCareerAPI } from 'api/careerAPI'
import { fetchListCityAPI } from 'api/cityAPI'
import { fetchListRankAPI } from 'api/rankAPI'
import { toastWarning } from 'helpers/toastify'
import { get } from 'lodash'
import { fetchListCitySuccess, fetchListRankSuccess, fetchListCareerSuccess } from './slices'

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
    console.log('get(data', get(data, 'result'))
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
