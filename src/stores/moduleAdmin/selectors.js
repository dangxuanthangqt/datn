import { createSelector } from '@reduxjs/toolkit'
import { get } from 'lodash-es'

const adminSelector = (state) => state.adminState

export const dashBoardAdminSelector = createSelector(adminSelector, (state) => get(state, 'dashBoardAdmin', {}))

export const recruitmentAdminSelector = createSelector(adminSelector, (state) => get(state, 'recruitmentAdmin', []))

export const employerAdminSelector = createSelector(adminSelector, (state) => get(state, 'employerAdmin', []))

export const candidateAdminSelector = createSelector(adminSelector, (state) => get(state, 'candidateAdmin', []))
