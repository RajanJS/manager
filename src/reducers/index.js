/**
 * Created by rajanmaharjan on 7/20/17.
 */

import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer
});