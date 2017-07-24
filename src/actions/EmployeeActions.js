/**
 * Created by rajanmaharjan on 7/24/17.
 */

import {
    EMPLOYEE_UPDATE
} from './types';

export const employeeUpdate = ({prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: {prop, value}
    };
};