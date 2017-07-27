/**
 * Created by rajanmaharjan on 7/24/17.
 */

import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    console.log('employee form reducer', action);
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            //action.payload == {prop:'name', value:'jane'}
            return {...state, [action.payload.prop]: action.payload.value}; // Key Interpolation
        case EMPLOYEE_CREATE:
            return INITIAL_STATE;
        case EMPLOYEE_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};
