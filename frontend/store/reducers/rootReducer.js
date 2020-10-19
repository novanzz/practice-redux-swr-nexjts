import purchaseResult from './purchaseResult';
import counter from './counter';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    purchase: purchaseResult,
    ctr:counter
});

export default rootReducer;