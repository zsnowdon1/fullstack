import * as api from '../api/index.js';

export const signin = (loginData, router) => async (dispatch) => {
    try {
        const { data } = await api.signin(loginData);
        dispatch({ type: 'AUTH', data });
        router.push('/');
    } catch (error) {
        console.log(error.message);
    }
}

export const signup = (signUpData, router) => async (dispatch) => {
    try {
        const { data } = await api.signup(signUpData);
        dispatch({ type: 'AUTH', data });
        router.push('/');
    } catch (error) {
        console.log(error.message);
    }
}