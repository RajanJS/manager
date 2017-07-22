/**
 * Created by rajanmaharjan on 7/20/17.
 */
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,
    LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: null,
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    console.log('action', action);
    switch (action.type) {
        case  EMAIL_CHANGED:
            return {...state, email: action.payload};
        case  PASSWORD_CHANGED:
            return {...state, password: action.payload};
        case  LOGIN_USER:
            return {...state, loading: true, error: ''};
        case  LOGIN_USER_SUCCESS:
            return {
                ...state,
                ...INITIAL_STATE,
                user: action.payload
            };
        case  LOGIN_USER_FAILED:
            return {
                ...state,
                error: 'Please check your credentials!',
                password: '',
                loading: false
            };
        default:
            return state;
    }
};