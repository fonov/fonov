const add_rating = (testN, type, data) => {
    return {
        type: 'ADD_RATING',
        rating: {
            testN,
            type,
            data
        }
    }
};

export {
    add_rating
}