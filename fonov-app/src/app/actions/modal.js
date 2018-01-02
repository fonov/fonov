const show_modal = (title, text) => {
    return {
        type: 'SHOW_MODAL',
        title,
        text,
    }
};

const hide_modal = () => {
    return {
        type: 'HIDE_MODAL'
    }
};


export {
    show_modal,
    hide_modal
}