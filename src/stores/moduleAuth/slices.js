import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  jwtDecode: {},
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, { payload }) => {
      state.user = payload
    },
    loginFailure: (state) => {
      state.user = {}
    },
    setJwtDecode: (state, { payload }) => {
      state.jwtDecode = payload
    },
    logoutSuccess: (state) => {
      state.user = {}
      state.jwtDecode = {}
    },
  },
})

export const {
  loginSuccess, loginFailure, setJwtDecode, logoutSuccess,
} = authSlice.actions

export default authSlice.reducer
