let init_state = {model: null, color: null, model_info: {firstLetter: null, code: null, code_country: null}};

const current_iphone = (state = init_state, action) => {
    switch (action.type) {
        case 'SET_IPHONE':
            return Object.assign({}, action.iphone);
        case 'CLEAN_IPHONE':
            return Object.assign({}, init_state);
        default:
            if (process.env.NODE_ENV === 'development') {
                return {
                    model: 'iPhone 5c',
                    color: 'green',
                    model_info: {firstLetter: 'M', code: 'QCT2', code_country: 'RR'}
                };
            } else {
                return state
            }
    }
};

export default current_iphone