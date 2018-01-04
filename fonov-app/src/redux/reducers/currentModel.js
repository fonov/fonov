const currentModel = (state = null, action) => {
    switch (action.type) {
        case 'SET_MODEL':
            return action.model;
        case 'CLEAN_MODEL':
            return null;
        default:
            return state
    }
};

export default currentModel