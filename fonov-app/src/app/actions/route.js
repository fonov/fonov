const ADD_ROUTE = (route, props = null) => {
    return {
        type: 'ADD_ROUTE',
        route,
        props
    }
};

const POP_ROUTE = (props = null) => {
    return {
        type: 'POP_ROUTE',
        props
    }
};

const REPLACE_ROUTE = (route, props = null) => {
    return {
        type: 'REPLACE_ROUTE',
        route,
        props
    }
};

export {
    ADD_ROUTE,
    POP_ROUTE,
    REPLACE_ROUTE
}