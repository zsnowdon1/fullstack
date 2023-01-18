import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { TextField, Button, Typography, Paper, Container } from '@material-ui/core';
import * as actionType from '../../constants/actionTypes';
import './LoginPage.css';

import { signin } from '../../actions/auth';

function LoginPage() {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
     });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(signin(loginData, navigate));
    }

    const handleLogout = () => {
        dispatch({ type: actionType.LOGOUT });
        navigate.push('/auth');
    }

    return (
        <form autoComplete="off" noValidate onSubmit={handleLogin}>
            <TextField name="email" variant="outlined" label="Email" fullWidth value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}/>
            <TextField name="password" variant="outlined" label="Password" fullWidth value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}/>
            <Button variant="contained" color="primary" size="large" type="submit" fullWidth>Login</Button>
            <Button type="button" color="secondary" size="large" onClick={handleLogout}>Logout</Button>
        </form>

    );
}

export default LoginPage;