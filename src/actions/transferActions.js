import { CHANGE_TRANSFER } from './types';

export function changeTransfer(index) {
    return {
        type: CHANGE_TRANSFER,
        payload: index
    };
}