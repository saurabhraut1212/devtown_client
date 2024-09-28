import React from 'react';
import AuthForm from '../auth/AuthForm';

const UserLogin = () => {
    return (
        <AuthForm
            mode="login"
            apiEndpoint="http://localhost:8000/auth/login"
            redirectPath="/user/userDashboard"
            otherPath="/user/userRegister"
            linkText="Register"
        />
    );
};

export default UserLogin;