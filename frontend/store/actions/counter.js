import * as actionTypes from './actionTypes';

export const increment = ( res ) => {
    return {
        type: actionTypes.INCREMENT,
        result: res
    };
}