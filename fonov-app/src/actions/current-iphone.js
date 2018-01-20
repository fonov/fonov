import SchemeOfTests from "../constant/schemeOfTests";


const setCurrentiPhone = (model, color) => {
    return (dispatch, getState) => {
        dispatch({type: 'SET_IPHONE', iphone: {model, color}});
        dispatch({type: 'SET_SCHEMEOFTEST', scheme: SchemeOfTests(model)})
    };
};

export default setCurrentiPhone