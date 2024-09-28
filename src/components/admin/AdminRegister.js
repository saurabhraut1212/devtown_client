import React from 'react';
import AuthForm from '../auth/AuthForm';

const AdminRegister = () => {
    return (
        <AuthForm
            mode="register"
            apiEndpoint="http://localhost:8000/auth/register"
            redirectPath="/admin/adminLogin"
            otherPath="/admin/adminLogin"
            linkText="Login"
        />
    );
};

export default AdminRegister;