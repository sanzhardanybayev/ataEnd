import { CHANGE_TRANSFER } from '../actions/types';

export default function(state = 0, action) {
    switch (action.type) {
        case CHANGE_TRANSFER:
            return action.payload;
        default:
            return state;
    }
}