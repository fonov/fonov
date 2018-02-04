import {push} from "react-router-redux";
import URLS from "../constant/urls";
import {CLEAN_TEST, SET_TESTTYPE} from '../constant/actions'


const clean_test = () => {
    return dispatch => {
        Promise.all([
            dispatch({type: 'CLEAN_IPHONE'}),
            dispatch({type: 'CLEAN_RATING'}),
            dispatch({type: CLEAN_TEST})
        ])
    }
};

const nextTest = testN => {
    return (dispatch, getState) => {
        const {test} = getState(),
            schemeOfTest = test.scheme,
            nextIndex = schemeOfTest.indexOf(testN)+1;

        if (nextIndex === schemeOfTest.length) {
            dispatch(push(URLS.TestResult))
        } else {
            dispatch(push(URLS[schemeOfTest[nextIndex]]))
        }
    }
};

const start_test = test_type => {
    return (dispatch, getState) => {
        const {test} = getState(),
            initialTest = test.scheme[0];

        Promise.all([
            dispatch({type: SET_TESTTYPE, test_type}),
            dispatch(push(initialTest))
        ])
    }
};

export {
    clean_test,
    nextTest,
    start_test
}