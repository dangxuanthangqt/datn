import { createSelector } from '@reduxjs/toolkit'
import { get } from 'lodash-es'

const employerSelector = (state) => state.employerState

export const listEmployerOrderSelector = createSelector(employerSelector, (state) => get(state, 'listEmployerOrder', []))

export const dataListEmployerSelector = createSelector(employerSelector, (state) => get(state, 'listEmployer.data', []))

export const totalListEmployerSelector = createSelector(employerSelector, (state) => get(state, 'listEmployer.total'))

export const infoEmployerSelector = createSelector(employerSelector, (state) => get(state, 'infoEmployer', {}))

export const dashboardEmployerSelector = createSelector(employerSelector, (state) => get(state, 'dashboardEmployer', {}))

export const listCvAppliedSelector = createSelector(employerSelector, (state) => get(state, 'listCvApplied', {}))

export const listCvAttentionSelector = createSelector(employerSelector, (state) => get(state, 'listCvAttention', []))
