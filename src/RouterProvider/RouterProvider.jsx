import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayOut from '../LayOut/MainLayOut';

const RouterProvider = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayOut />}>
            </Route>
        </Routes>
    );
};

export default RouterProvider;