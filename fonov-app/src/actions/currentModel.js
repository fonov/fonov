import SchemeOfTests from "../constant/schemeOfTests";


const setCurrentModel = model => {
    return (dispatch, getState) => {
        dispatch({type: 'SET_MODEL', model});
        dispatch({type: 'SET_SCHEMEOFTEST', scheme: SchemeOfTests(model)})
    };
};

export default setCurrentModel