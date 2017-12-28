

const route = (state = 'DEFAULT', action) => {
    switch (action.type) {
        case 'CHANGE_ROUTE':
            return action.route;
        default:
            return state
    }
};


export default route