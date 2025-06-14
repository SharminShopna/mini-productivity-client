import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayOut from '../LayOut/MainLayOut';
import DashboardLayout from '../LayOut/DashboardLayout';
import HomePage from '../Pages/HomePage';
import Login from '../AuthProvider/Login';
import Register from '../AuthProvider/Register';
import Tasks from '../Components/Dashboard/Tasks';
import Goals from '../Components/Dashboard/Goals';
import Quote from '../Components/Dashboard/Quote';
import DashboardHome from '../Components/Dashboard/DashboardHome';
import AddTasks from '../Components/Dashboard/AddTasks';
import UpdateTask from '../Components/Dashboard/UpdateTask';
import AddGoals from '../Components/Dashboard/AddGoals';
import UpdateGoals from '../Components/Dashboard/UpdateGoals';

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
                <Route path="update/:id" element={<UpdateTask />} />
                <Route path="goals" element={<Goals />} />
                <Route path="addGoals" element={<AddGoals/>} />
                <Route path="updateGoals/:id" element={<UpdateGoals/>} />
                <Route path="quote" element={<Quote />} />

            </Route>
        </Routes>
    );
};

export default RouterProvider;