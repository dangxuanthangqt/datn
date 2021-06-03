import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  listCity: [],
  listRank: [],
  listCareer: [],
  listSalary: [],
  listTypeOfWork: [],
}

const dataMasterSlice = createSlice({
  name: 'data master',
  initialState,
  reducers: {
    fetchListCitySuccess: (state, { payload }) => {
      state.listCity = payload
    },
    fetchListRankSuccess: (state, { payload }) => {
      state.listRank = payload
    },
    fetchListCareerSuccess: (state, { payload }) => {
      state.listCareer = payload
    },
    fetchListSalarySuccess: (state, { payload }) => {
      state.listSalary = payload
    },
    fetchListTypeOfWorkSuccess: (state, { payload }) => {
      state.listTypeOfWork = payload
    },
  },
})

export const {
  fetchListCitySuccess,
  fetchListRankSuccess,
  fetchListCareerSuccess,
  fetchListSalarySuccess,
  fetchListTypeOfWorkSuccess,
} = dataMasterSlice.actions

export default dataMasterSlice.reducer
