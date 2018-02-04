import {TEST_TYPE_1} from '../../constant/config'
import {SET_SCHEMEOFTEST, CLEAN_TEST, SET_TESTTYPE} from '../../constant/actions'


const initState = {scheme: ['About'], type: TEST_TYPE_1};

const test = (state = initState, action) => {
    switch (action.type) {
        case SET_SCHEMEOFTEST:
            return Object.assign({}, state, {scheme: action.scheme});
        case SET_TESTTYPE:
            return Object.assign({}, state, {type: action.test_type});
        case CLEAN_TEST:
            return initState;
        default:
            return state
    }
};

export default test