//Custom reduce
import { routerReducer } from 'react-router-redux'
import { localeReducer as locale } from 'react-localize-redux';
//My reduce
import { combineReducers } from 'redux'
import current_iphone from './current-iphone'
import rating from './rating'
import schemeOfTest from './schemeOfTest'


const reducers = combineReducers({
    current_iphone,
    rating,
    schemeOfTest,
    router: routerReducer,
    locale
});

export default reducers