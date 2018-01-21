import SchemeOfTests from "../constant/schemeOfTests";


const setCurrentiPhone = (model, color, model_info) => {
    return (dispatch, getState) => {
        dispatch({type: 'SET_IPHONE', iphone: {model, color, model_info}});
        dispatch({type: 'SET_SCHEMEOFTEST', scheme: SchemeOfTests(model)})
    };
};

export default setCurrentiPhone