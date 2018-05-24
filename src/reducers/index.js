import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import cartReducer from './tourReducer';
import typeReducer from './TypeContantReducer';
import transferReducer from './transferReducer';

const allReducers = combineReducers({
    filter: filterReducer,
    typeContant: typeReducer,
    cart:  cartReducer,
    selectedTransfer: transferReducer
});

export default allReducers;
