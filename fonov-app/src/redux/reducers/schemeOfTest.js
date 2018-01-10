const schemeOfTest = (state = ['About'], action) => {
    switch (action.type) {
        case 'SET_SCHEMEOFTEST':
            return action.scheme;
        case 'CLEAN_SCHEMEOFTEST':
            return ['About'];
        default:
            return state
    }
};

export default schemeOfTest