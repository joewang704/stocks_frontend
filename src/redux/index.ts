import { combineReducers, Reducer } from 'redux'
import { browse, BrowseState } from './browse'
import { routerReducer } from 'react-router-redux'

export interface Store {
  readonly browse: BrowseState,
}

export const rootReducer: Reducer<Store> = combineReducers<Store>({
  browse,
  routerReducer,
})
