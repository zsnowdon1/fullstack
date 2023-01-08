import { AUTH } from '../constants/actionTypes.js';
import * as api from '../api/index.js';

export const signin = (formDate, history) => async (dispatch) => {
    try {
        // log in the user..

        history.push('/');
    } catch (error) {
        console.log(error.message);
    }
}

export const signup = (formDate, history) => async (dispatch) => {
    try {
        // sign up the user..

        history.push('/');
    } catch (error) {
        console.log(error.message);
    }
}