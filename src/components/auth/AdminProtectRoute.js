import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('adminToken');

    if (!token) {
        return <Navigate to="/admin/adminLogin" />;
    }

    return children;
};

export default AdminProtectedRoute;