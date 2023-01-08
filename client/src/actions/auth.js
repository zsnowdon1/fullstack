import * as api from '../api/index.js';

export const signin = (loginData, router) => async (dispatch) => {
    try {
        const { data } = await api.signin(loginData);
        dispatch({ type: 'AUTH', data });
    } catch (error) {
        console.log(error.message);
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {
        // sign up the user..

        history.push('/');
    } catch (error) {
        console.log(error.message);
    }
}