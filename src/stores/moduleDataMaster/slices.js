import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  listCity: [],
  listRank: [],
  listCareer: [],
}

const dataMasterSlice = createSlice({
  name: 'data master',
  initialState,
  reducers: {
    fetchListCitySuccess: (state, { payload }) => {
      state.listCity = payload
    },
    fetListRankSuccess: (state, { payload }) => {
      state.listRank = payload
    },
    fetListCareerSuccess: (state, { payload }) => {
      state.listCareer = payload
    },
  },
})

export const {
  fetchListCitySuccess,
  fetchListRankSuccess,
  fetchListCareerSuccess,
} = dataMasterSlice.actions

export default dataMasterSlice.reducer
