import { createSelector } from '@reduxjs/toolkit'
import { get } from 'lodash-es'

const employerSelector = (state) => state.employerState

export const listEmployerOrderSelector = createSelector(employerSelector, (state) => get(state, 'listEmployerOrder', []))

export const dataListEmployerSelector = createSelector(employerSelector, (state) => get(state, 'listEmployer.data', []))

export const totalListEmployerSelector = createSelector(employerSelector, (state) => get(state, 'listEmployer.total'))

export const infoEmployerSelector = createSelector(employerSelector, (state) => get(state, 'infoEmployer', {}))
