const clean_test = () => {
    return dispatch => {
        Promise.all([
            dispatch({type: 'CLEAN_IPHONE'}),
            dispatch({type: 'CLEAN_RATING'}),
            dispatch({type: 'CLEAN_SCHEMEOFTEST'})
        ])
    }
};

export {
    clean_test
}