import React from 'react';
import { Navigate } from 'react-router-dom';

const UserProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('userToken');

    if (!token) {
        return <Navigate to="/user/userLogin" />;
    }

    return children;
};

export default UserProtectedRoute;