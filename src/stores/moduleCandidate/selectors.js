import { createSelector } from '@reduxjs/toolkit'
import { get } from 'lodash'

const candidateSelector = (state) => state?.candidateState

export const dashboardCandidateSelector = createSelector(candidateSelector, state => get(state, 'dashboardCandidate', {}))

export const infoCandidateSelector = createSelector(candidateSelector, state => get(state, 'infoCandidate', {}))

export const recruitmentApplySelector = createSelector(candidateSelector, state => get(state, 'listRecruitmentApply', {}))

export const listCandidateSelector = createSelector(candidateSelector, state => get(state, 'listCandidate', {}))

export const detailCandidateSelector = createSelector(candidateSelector, state => get(state, 'detailCandidate', {}))

export const listEmployerAttentionSelector = createSelector(candidateSelector, state => get(state, 'listEmployerAttention', []))
