const route = (state = {currentRoute: 'DEFAULT', stack: ['DEFAULT']}, action) => {
    switch (action.type) {
        case 'ADD_ROUTE':
            return {
                currentRoute: action.route,
                stack: [...state.stack, action.route]
            };
        case 'POP_ROUTE':
            state.stack.pop();
            return {
                currentRoute: state.stack[state.stack.length - 1],
                stack: state.stack
            };
        case 'REPLACE_ROUTE':
            state.stack.pop();
            return {
                currentRoute: action.route,
                stack: [...state.stack, action.route]
            };
        default:
            return state
    }
};


export default route