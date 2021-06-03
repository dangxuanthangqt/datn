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
    resetDetailCV: (state) => {
      state.detailCV = {}
    },
  },
})

export const {
  fetchListCvByUserSuccess,
  fetchDetailCvSuccess,
  resetDetailCV,
} = CvSlice.actions

export default CvSlice.reducer
