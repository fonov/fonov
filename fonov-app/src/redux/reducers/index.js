import { combineReducers } from 'redux'
import route from './route'
import currentModel from './currentModel'


const reducers = combineReducers({
    route,
    currentModel
});

export default reducers