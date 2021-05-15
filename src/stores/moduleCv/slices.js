import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  listCvByUser: [],
  detailCV: {},
}

const CvSlice = createSlice({
  name: 'Cv',
  initialState,
  reducers: {
    fetchListCvByUserSuccess: (state, { payload }) => {
      state.listCvByUser = payload
    },
    fetchDetailCvSuccess: (state, { payload }) => {
      state.detailCV = payload
    },
  },
})

export const {
  fetchListCvByUserSuccess,
  fetchDetailCvSuccess,
} = CvSlice.actions

export default CvSlice.reducer
