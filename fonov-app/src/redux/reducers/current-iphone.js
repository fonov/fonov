let init_state = {model: null, color: null, model_code: null};

if (process.env.NODE_ENV === 'development') {
    init_state = {model: 'iPhone X', color: 'Silver', model_code: 'MQCT2RR/A'};
    // init_state = {model: 'iPhone 6s Plus', color: 'Gold', model_code: 'MKUF2RR/A'};
}

const current_iphone = (state = init_state, action) => {
    switch (action.type) {
        case 'SET_IPHONE':
            return Object.assign({}, action.iphone);
        case 'CLEAN_IPHONE':
            return Object.assign({}, init_state);
        default:
            return state
    }
};

export default current_iphone