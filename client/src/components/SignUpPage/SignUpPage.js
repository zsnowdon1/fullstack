import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { TextField, Button } from '@material-ui/core';

import { signup } from '../../actions/auth';

function SignUpPage() {
    const [signUpData, setLoginData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: ''
     });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignUp = (e) => {
        e.preventDefault();
        dispatch(signup(signUpData, navigate));
    }

    return (
        <form autoComplete="off" noValidate onSubmit={handleSignUp}>
            <TextField name="email" variant="outlined" label="Email" fullWidth value={signUpData.email} onChange={(e) => setLoginData({ ...signUpData, email: e.target.value })}/>
            <TextField name="password" variant="outlined" label="Password" fullWidth value={signUpData.password} onChange={(e) => setLoginData({ ...signUpData, password: e.target.value })}/>
            <TextField name="confirmPassword" variant="outlined" label="Confirm Password" fullWidth value={signUpData.confirmPassword} onChange={(e) => setLoginData({ ...signUpData, confirmPassword: e.target.value })}/>
            <TextField name="firstName" variant="outlined" label="First Name" fullWidth value={signUpData.firstName} onChange={(e) => setLoginData({ ...signUpData, firstName: e.target.value })}/>
            <TextField name="lastName" variant="outlined" label="Last Name" fullWidth value={signUpData.lastName} onChange={(e) => setLoginData({ ...signUpData, lastName: e.target.value })}/>
            <Button variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        </form>

    );
}

export default SignUpPage;