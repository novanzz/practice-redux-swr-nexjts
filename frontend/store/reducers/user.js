import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility.js';

const initialState = {
    result: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER:
            return updateObject(state,{result:action.result})
        default:
            return state
    }
};

export default reducer;