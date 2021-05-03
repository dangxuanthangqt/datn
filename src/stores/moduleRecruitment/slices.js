import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  information: {
    recruitments: 100,
    employers: 100,
    candidates: 100,
  },
  listRecruitmentOrder: [],
  listRecruitment: {},
}

const recruitmentSlice = createSlice({
  name: 'recruitment',
  initialState,
  reducers: {
    fetchInfoSuccess: (state, { payload }) => {
      state.information = payload
    },
    fetchListRecruitmentOrderSuccess: (state, { payload }) => {
      state.listRecruitmentOrder = payload
    },
    fetchListRecruitmentSuccess: (state, { payload }) => {
      state.listRecruitment = payload
    },
  },
})

export const {
  fetchInfoSuccess,
  fetchListRecruitmentOrderSuccess,
  fetchListRecruitmentSuccess,
} = recruitmentSlice.actions

export default recruitmentSlice.reducer
