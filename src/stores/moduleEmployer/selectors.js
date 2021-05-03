import { createSelector } from '@reduxjs/toolkit'
import { get } from 'lodash-es'

const employerSelector = (state) => state.employerState

export const listEmployerOrderSelector = createSelector(employerSelector, (state) => get(state, 'listEmployerOrder', []))
