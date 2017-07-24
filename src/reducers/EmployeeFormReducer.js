/**
 * Created by rajanmaharjan on 7/24/17.
 */

/**
 * Created by rajanmaharjan on 7/20/17.
 */
import {
    EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    console.log(state)
    console.log(action)
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            //action.payload == {prop:'name', value:'jane'}
            return {...state, [action.payload.prop]: action.payload.value}; // Key Interpolation
        default:
            return state;
    }
};
