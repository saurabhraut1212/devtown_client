import React from 'react';
import AuthForm from '../auth/AuthForm';

const AdminLogin = () => {
    return (
        <AuthForm
            mode="login"
            apiEndpoint="http://localhost:8000/auth/login"
            redirectPath="/admin/adminDashboard"
            otherPath="/admin/adminRegister"
            linkText="Register"
        />
    );
};

export default AdminLogin;