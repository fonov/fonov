const add_rating = (testN, data) => {
    return {
        type: 'ADD_RATING',
        rating: {
            testN,
            data
        }
    }
};

export {
    add_rating
}