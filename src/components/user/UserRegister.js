import React from 'react';
import AuthForm from '../auth/AuthForm';

const UserRegister = () => {
    return (
        <AuthForm
            mode="register"
            apiEndpoint="http://localhost:8000/auth/register"
            redirectPath="/user/userLogin"
            otherPath="/user/userLogin"
            linkText="Login"
        />
    );
};

export default UserRegister;