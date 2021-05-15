import { createSelector } from '@reduxjs/toolkit'
import { get } from 'lodash'

const cvSelector = (state) => state?.cvState

export const detailCVSelector = createSelector(cvSelector, (state) => get(state, 'detailCV', {}))

export const listCvByUserSelector = createSelector(cvSelector, state => get(state, 'listCvByUser', []))
