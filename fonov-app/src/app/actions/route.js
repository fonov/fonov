const ADD_ROUTE = route => {
    return {
        type: 'ADD_ROUTE',
        route
    }
};

const POP_ROUTE = () => {
    return {
        type: 'POP_ROUTE'
    }
};

export {
    ADD_ROUTE,
    POP_ROUTE
}