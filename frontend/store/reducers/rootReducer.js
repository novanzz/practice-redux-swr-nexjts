import purchaseResult from './purchaseResult';
import counter from './counter';
import user from './user';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    purchase: purchaseResult,
    ctr:counter,
    user:user
});

export default rootReducer;