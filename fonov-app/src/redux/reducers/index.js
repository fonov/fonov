import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import current_iphone from './current-iphone'
import rating from './rating'
import schemeOfTest from './schemeOfTest'


const reducers = combineReducers({
    current_iphone,
    rating,
    schemeOfTest,
    router: routerReducer
});

export default reducers