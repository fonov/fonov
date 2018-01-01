const rating = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_RATING':
            return {...state, [action.rating.testN]: action.rating.data};
        default:
            return state
    }
};

export default rating