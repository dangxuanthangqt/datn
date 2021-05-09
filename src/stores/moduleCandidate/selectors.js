import { createSelector } from '@reduxjs/toolkit'
import { get } from 'lodash'

const candidateSelector = (state) => state?.candidateState

export const dashboardCandidateSelector = createSelector(candidateSelector, state => get(state, 'dashboardCandidate', {}))

export const infoCandidateSelector = createSelector(candidateSelector, state => get(state, 'infoCandidate', {}))
