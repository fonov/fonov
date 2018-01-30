let init_state = {model: null, color: null, model_info: {firstLetter: null, code: null, code_country: null}};


if (process.env.NODE_ENV === 'development') {
    init_state = {
        model: 'iPhone 6s',
        color: 'silver',
        model_info: {firstLetter: 'M', code: 'N0N2', code_country: 'RR'}
    };
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