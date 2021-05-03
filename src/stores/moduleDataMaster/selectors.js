import { createSelector } from '@reduxjs/toolkit'
import { get } from 'lodash'

const dataMasterSelector = (state) => state?.cityState

export const listCitySelector = createSelector(dataMasterSelector, state => get(state, 'listCity', []))
export const listRankSelector = createSelector(dataMasterSelector, state => get(state, 'liatRank', []))
export const listCareerSelector = createSelector(dataMasterSelector, state => get(state, 'listCareer', []))
