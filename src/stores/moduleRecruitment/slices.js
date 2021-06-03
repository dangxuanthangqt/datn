import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  information: {
    recruitments: 100,
    employers: 100,
    candidates: 100,
  },
  listRecruitmentOrder: [],
  listRecruitment: {},
  listRecruitmentByUserID: {},
  detailRecruitment: {},
  infoEditRecruitment: {},
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
    fetchListRecruitmentByEmployerIDSuccess: (state, { payload }) => {
      state.listRecruitmentByUserID = payload
    },
    fetchDetailRecruitmentSuccess: (state, { payload }) => {
      state.detailRecruitment = payload
    },
    fetchInfoEditRecruitmentSuccess: (state, { payload }) => {
      state.infoEditRecruitment = payload
    },
  },
})

export const {
  fetchInfoSuccess,
  fetchListRecruitmentOrderSuccess,
  fetchListRecruitmentSuccess,
  fetchListRecruitmentByEmployerIDSuccess,
  fetchDetailRecruitmentSuccess,
  fetchInfoEditRecruitmentSuccess,
} = recruitmentSlice.actions

export default recruitmentSlice.reducer
