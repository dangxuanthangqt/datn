import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  listEmployerOrder: [],
  listEmployer: {},
  infoEmployer: {},
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
  },
})

export const {
  fetchListEmployerOrderSuccess,
  fetchListEmployerSuccess,
  fetchInfoEmployerSuccess,
} = employerSlice.actions

export default employerSlice.reducer
