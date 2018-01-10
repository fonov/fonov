import { push } from 'react-router-redux'
import URLS from "../constant/urls";


const nextTest = testN => {
    return (dispatch, getState) => {
        const {schemeOfTest} = getState(),
            nextIndex = schemeOfTest.indexOf(testN)+1;
        if (nextIndex === schemeOfTest.length) {
            dispatch(push(URLS.TestResult))
        } else {
            dispatch(push(URLS[schemeOfTest[nextIndex]]))
        }
    }
};

export {
    nextTest
}