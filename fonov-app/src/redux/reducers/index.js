//Custom reduce
import { routerReducer } from 'react-router-redux'
import { localeReducer as locale } from 'react-localize-redux';
//My reduce
import { combineReducers } from 'redux'
import current_iphone from './current-iphone'
import rating from './rating'
import test from './test'


const reducers = combineReducers({
    current_iphone,
    rating,
    test,
    router: routerReducer,
    locale
});

export default reducers