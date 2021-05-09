import { createSelector } from '@reduxjs/toolkit'
import { get } from 'lodash-es'

const recruitmentSelector = (state) => state.recruitmentState

export const informationSelector = createSelector(recruitmentSelector, (state) => get(state, 'information', {}))

export const listRecruitmentOrderSelector = createSelector(recruitmentSelector, (state) => get(state, 'listRecruitmentOrder', []))

export const listRecruitmentSelector = createSelector(recruitmentSelector, (state) => get(state, 'listRecruitment', {}))

export const dataListRecruitment = createSelector(recruitmentSelector, (state) => get(state, 'listRecruitment.data', []))

export const totalSelector = createSelector(recruitmentSelector, (state) => get(state, 'listRecruitment.total'))

export const detailRecruimentSelector = createSelector(recruitmentSelector, (state) => get(state, 'detailRecruitment', {}))

export const listRecruitmentByUserIDSelector = createSelector(recruitmentSelector, (state) => get(state, 'listRecruitmentByUserID', {}))
