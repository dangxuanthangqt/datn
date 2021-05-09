import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dashboardCandidate: {},
  infoCandidate: {},
}

const candidateSlice = createSlice({
  name: 'data master',
  initialState,
  reducers: {
    dispatchFetchDashboardCandidateSuccess: (state, { payload }) => {
      state.dashboardCandidate = payload
    },
    dispatchFetchInfoCandidateSuccess: (state, { payload }) => {
      state.infoCandidate = payload
    },
  },
})

export const {
  dispatchFetchDashboardCandidateSuccess,
  dispatchFetchInfoCandidateSuccess,
} = candidateSlice.actions

export default candidateSlice.reducer
