import SchemeOfTests from "../constant/schemeOfTests";


const setCurrentiPhone = (model, color, model_code) => {
    return (dispatch, getState) => {
        dispatch({type: 'SET_IPHONE', iphone: {model, color, model_code}});
        dispatch({type: 'SET_SCHEMEOFTEST', scheme: SchemeOfTests(model)})
    };
};

export default setCurrentiPhone