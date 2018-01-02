import { combineReducers } from 'redux'
import route from './route'
import currentModel from './currentModel'
import rating from './rating'
import modal from './modal'


const reducers = combineReducers({
    route,
    currentModel,
    rating,
    modal
});

export default reducers