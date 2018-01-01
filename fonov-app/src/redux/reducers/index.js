import { combineReducers } from 'redux'
import route from './route'
import currentModel from './currentModel'
import rating from './rating'


const reducers = combineReducers({
    route,
    currentModel,
    rating
});

export default reducers