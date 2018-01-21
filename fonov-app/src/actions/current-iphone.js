import SchemeOfTests from "../constant/schemeOfTests";


const setCurrentiPhone = (model, color, model_code, country_code) => {
    return (dispatch, getState) => {
        dispatch({type: 'SET_IPHONE', iphone: {model, color, model_code, country_code}});
        dispatch({type: 'SET_SCHEMEOFTEST', scheme: SchemeOfTests(model)})
    };
};

export default setCurrentiPhone