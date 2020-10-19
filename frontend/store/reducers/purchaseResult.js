import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility.js';

const initialState = {
    results: [],
    result: null
};

// const deletePayment = ( state, action ) => {
//     const updatedArray = state.results.filter( result => result.id !== action.resultElId );
//     return updateObject( state, { results: updatedArray } );
// };

// const reducer = ( state = initialState, action ) => {
//     switch ( action.type ) {
//         case actionTypes.SAVE_PAYMENT : return updateObject( state, { results: state.results.concat( { id: new Date(), value: action.result } ) } );
//         // case actionTypes.DELETE_RESULT : return deleteResult(state, action);
//     }
//     return state;
// };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_PAYMENT: return updateObject(state, { result: action.result });
        // case actionTypes.DELETE_RESULT : return deleteResult(state, action);
    }
    return state;
};
export default reducer;