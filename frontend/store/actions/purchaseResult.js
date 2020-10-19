import * as actionTypes from './actionTypes';

export const savePayment = ( res ) => {
    return {
        type: actionTypes.SAVE_PAYMENT,
        result: res
    };
}

// export const storeResult = ( res ) => {
//     return (dispatch, getState) => {
//         setTimeout( () => {
//             // const oldCounter = getState().ctr.counter;
//             // console.log(oldCounter);
//             dispatch(savePayment(res));
//         }, 2000 );
//     }
// };

export const deletePayment = ( resElId ) => {
    return {
        type: actionTypes.DELETE_PAYMENT,
        resultElId: resElId
    };
};