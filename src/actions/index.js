/**
 * Created by rajanmaharjan on 7/20/17.
 */
import {EMAIL_CHANGED} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};