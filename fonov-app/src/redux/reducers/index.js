import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import currentModel from './currentModel'
import rating from './rating'
import modal from './modal'


const reducers = combineReducers({
    currentModel,
    rating,
    modal,
    router: routerReducer
});

export default reducers