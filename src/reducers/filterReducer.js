const filter = {
    price: 100,
    rating: 5,
    boon: []
};

export default function (state = filter, action) {
    switch (action.type) {
        case 'FILTER_CHANGED':

            return {
                price: action.payload.price || state.price,
                rating: action.payload.rating || state.rating,
                boon: action.payload.boon || state.boon
            };
        default:
            return state;
    }
}
