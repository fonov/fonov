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

const REPLACE_ROUTE = (route) => {
    return {
        type: 'REPLACE_ROUTE',
        route
    }
};

export {
    ADD_ROUTE,
    POP_ROUTE,
    REPLACE_ROUTE
}