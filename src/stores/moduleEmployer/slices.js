import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  listEmployerOrder: [],
  listEmployer: {},
  infoEmployer: {},
  dashboardEmployer: {},
  listCvApplied: [],
}

const employerSlice = createSlice({
  name: 'employer',
  initialState,
  reducers: {
    fetchListEmployerOrderSuccess: (state, { payload }) => {
      state.listEmployerOrder = payload
    },
    fetchListEmployerSuccess: (state, { payload }) => {
      state.listEmployer = payload
    },
    fetchInfoEmployerSuccess: (state, { payload }) => {
      state.infoEmployer = payload
    },
    fetchDashboardEmployerSuccess: (state, { payload }) => {
      state.dashboardEmployer = payload
    },
    fetchlistCvAppliedSuccess: (state, { payload }) => {
      state.listCvApplied = payload
    },
  },
})

export const {
  fetchListEmployerOrderSuccess,
  fetchListEmployerSuccess,
  fetchInfoEmployerSuccess,
  fetchDashboardEmployerSuccess,
  fetchlistCvAppliedSuccess,
} = employerSlice.actions

export default employerSlice.reducer
