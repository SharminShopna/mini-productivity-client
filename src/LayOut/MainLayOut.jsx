import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayOut = () => {
    return (
        <div>
            <h1>welcome to Main Layout</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;