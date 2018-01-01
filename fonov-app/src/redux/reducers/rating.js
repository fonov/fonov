const rating = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_RATING':
            return Object.assign(state, {[action.rating.testN]: {type: action.rating.type, data: action.rating.data}});
        default:
            return state
    }
};

export default rating