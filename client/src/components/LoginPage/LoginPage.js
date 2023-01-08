import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import './LoginPage.css';

import { signin } from '../../actions/auth';

function LoginPage() {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
     });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signin(loginData, navigate));
    }

    return (
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <TextField name="email" variant="outlined" label="Email" fullWidth value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}/>
            <TextField name="password" variant="outlined" label="Password" fullWidth value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}/>
            <Button variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        </form>
    );
}

export default LoginPage;