import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import AdminRegister from './components/admin/AdminRegister';
import AdminLogin from './components/admin/AdminLogin';
import UserRegister from './components/user/UserRegister';
import UserLogin from './components/user/UserLogin';
import AdminProtectedRoute from './components/auth/AdminProtectRoute';
import AdminDashboard from './components/admin/AdminDashboard';
import UserProtectedRoute from './components/auth/UserProtectRoute';
import UserDashboard from './components/user/UserDashboard';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="admin">
          <Route path="adminRegister" element={<AdminRegister />} />
          <Route path="adminLogin" element={<AdminLogin />} />

          <Route path="adminDashboard" element={<AdminProtectedRoute><AdminDashboard /></AdminProtectedRoute>} />


        </Route>

        <Route path="user">
          <Route path="userRegister" element={<UserRegister />} />
          <Route path="userLogin" element={<UserLogin />} />

          <Route path="userDashboard" element={<UserProtectedRoute><UserDashboard /></UserProtectedRoute>} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;