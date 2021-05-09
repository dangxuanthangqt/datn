import { createSelector } from '@reduxjs/toolkit'
import { get } from 'lodash'

const dataMasterSelector = (state) => state?.dataMasterState

export const listCitySelector = createSelector(dataMasterSelector, state => get(state, 'listCity', []))

export const listRankSelector = createSelector(dataMasterSelector, state => get(state, 'listRank', []))

export const listCareerSelector = createSelector(dataMasterSelector, state => get(state, 'listCareer', []))
