import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import "../../src/index.css"

const MainLayOut = () => {
    return (
        <>
            <div className='bg-tealGreen'>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </>
    );
};

export default MainLayOut;