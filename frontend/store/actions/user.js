import * as actionTypes from './actionTypes';

export const user = ( res ) => {
    return {
        type: actionTypes.USER,
        result: res
    };
}