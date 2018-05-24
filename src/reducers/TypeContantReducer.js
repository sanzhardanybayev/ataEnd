const condition = {
    type: 'tours'
};

export default function (state = condition, action) {
    switch (action.type) {
        case 'REMOVE_CONTENT':
            return action.payload;
        default:
            return state;
    }
}
