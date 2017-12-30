const currentModel = (state = 'iPhone X', action) => {
    switch (action.type) {
        case 'SET_MODEL':
            return action.model;
        default:
            return state
    }
};

export default currentModel