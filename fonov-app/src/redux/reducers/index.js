import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import currentModel from './currentModel'
import rating from './rating'
import schemeOfTest from './schemeOfTest'


const reducers = combineReducers({
    currentModel,
    rating,
    schemeOfTest,
    router: routerReducer
});

export default reducers