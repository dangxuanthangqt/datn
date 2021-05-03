import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  listEmployerOrder: [],
}

const employerSlice = createSlice({
  name: 'employer',
  initialState,
  reducers: {
    fetchListEmployerOrderSuccess: (state, { payload }) => {
      state.listEmployerOrder = payload
    },
  },
})

export const {
  fetchListEmployerOrderSuccess,
} = employerSlice.actions

export default employerSlice.reducer
