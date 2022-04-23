import { combineReducers, createStore } from 'redux'
import {loadingReducer} from './loadingReducer'
import {changeColorReducer} from './changeColor-reducer';

const reducers = combineReducers({
    loading: loadingReducer,
    theme: changeColorReducer

})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
