import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dashBoardAdmin: {},
  recruitmentAdmin: [],
  employerAdmin: [],
  candidateAdmin: [],
}

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    fetcDashBoardAdminSuccess: (state, { payload }) => {
      state.dashBoardAdmin = payload
    },
    fetchRecruitmentAdminSuccess: (state, { payload }) => {
      state.recruitmentAdmin = payload
    },
    fetchEmployerAdminSuccess: (state, { payload }) => {
      state.employerAdmin = payload
    },
    fetchCandidateAdminSuccess: (state, { payload }) => {
      state.candidateAdmin = payload
    },
  },
})

export const {
  fetcDashBoardAdminSuccess,
  fetchRecruitmentAdminSuccess,
  fetchEmployerAdminSuccess,
  fetchCandidateAdminSuccess,
} = adminSlice.actions

export default adminSlice.reducer
