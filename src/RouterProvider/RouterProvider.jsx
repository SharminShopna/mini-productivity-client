import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayOut from '../LayOut/MainLayOut';
import HomePage from '../Pages/HomePage';
import Login from '../AuthProvider/Login';
import Register from '../AuthProvider/Register';

const RouterProvider = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayOut />} >
            <Route index element={<HomePage />} />
             {/* Authentication routes under MainLayOut */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        </Route>
        </Routes>
    );
};

export default RouterProvider;