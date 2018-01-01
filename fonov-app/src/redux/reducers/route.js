const route = (state = {currentRoute: 'DEFAULT', stack: ['DEFAULT'], currentProps: null}, action) => {
    switch (action.type) {
        case 'ADD_ROUTE':
            return {
                currentProps: action.props,
                currentRoute: action.route,
                stack: [...state.stack, action.route]
            };
        case 'POP_ROUTE':
            state.stack.pop();
            return {
                currentProps: action.props,
                currentRoute: state.stack[state.stack.length - 1],
                stack: state.stack
            };
        case 'REPLACE_ROUTE':
            state.stack.pop();
            return {
                currentProps: action.props,
                currentRoute: action.route,
                stack: [...state.stack, action.route]
            };
        default:
            return state
    }
};


export default route