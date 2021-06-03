import { createSelector } from '@reduxjs/toolkit'
import { get, isEmpty } from 'lodash-es'

const authSelector = (state) => state?.authState

export const userSelector = createSelector(authSelector, state => state.user)

export const isAuthenticationSelector = createSelector(authSelector, state => {
  const jwtDecode = get(state, 'jwtDecode', {})

  if (!isEmpty(jwtDecode)) {
    const dateNow = new Date()

    if (jwtDecode.exp < dateNow.getTime() / 1000) {
      return false
    }
    return true
  }
  return false
})

export const permissionSelector = createSelector(authSelector, state => get(state, 'jwtDecode.scopes', []))

export const userIDSelector = createSelector(authSelector, state => get(state, 'jwtDecode.sub', null))
