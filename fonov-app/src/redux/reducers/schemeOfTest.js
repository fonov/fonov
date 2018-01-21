const initState = ['About'];

const schemeOfTest = (state = initState, action) => {
    switch (action.type) {
        case 'SET_SCHEMEOFTEST':
            return action.scheme;
        case 'CLEAN_SCHEMEOFTEST':
            return initState;
        default:
            return state
    }
};

export default schemeOfTest