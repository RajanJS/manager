/**
 * Created by rajanmaharjan on 7/20/17.
 */

import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducers({
    auth: AuthReducer
});