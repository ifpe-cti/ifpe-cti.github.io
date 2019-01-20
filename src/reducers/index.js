import { combineReducers } from 'redux'
import projectReducer from './projectReducer'
import { clickReducer } from './clickReducer'

const rootReducer = combineReducers({
    projectState: projectReducer,
    clickState: clickReducer
});

export default rootReducer