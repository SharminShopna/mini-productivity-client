import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayOut from '../LayOut/MainLayOut';
import HomePage from '../Pages/HomePage';
import Login from '../AuthProvider/Login';
import Register from '../AuthProvider/Register';
import DashboardLayout from '../LayOut/DashBoardLayOut';
import Tasks from '../Components/Dashboard/Tasks';
import Goals from '../Components/Dashboard/Goals';
import Quote from '../Components/Dashboard/Quote';
import DashboardHome from '../Components/Dashboard/DashboardHome';
import AddTasks from '../Components/Dashboard/AddTasks';

const RouterProvider = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayOut />} >
                <Route index element={<HomePage />} />
                {/* Authentication routes under MainLayOut */}
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>
            {/* Dashboard Layout Routes */}
            <Route path="dashboard" element={<DashboardLayout />}>
                <Route index element={<DashboardHome />} />
                <Route path="tasks" element={<Tasks />} />
                <Route path="add" element={<AddTasks />} />
                <Route path="goals" element={<Goals />} />
                <Route path="quote" element={<Quote />} />

            </Route>
        </Routes>
    );
};

export default RouterProvider;