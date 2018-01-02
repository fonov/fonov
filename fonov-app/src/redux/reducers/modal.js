const modal = (state = {show: false, title: '', text: ''}, action) => {
    switch (action.type) {
        case 'SHOW_MODAL':
            return {
                show: true,
                title: action.title,
                text: action.text
            };
        case 'HIDE_MODAL':
            return {
                show: false,
                title: '',
                text: ''
            };
        default:
            return state
    }
};

export default modal