import React, { useState } from 'react';
import Sidebar from '../Components/Dashboard/Sidebar';
import { Outlet } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <div className='hidden md:block'>
                <Navbar></Navbar>
            </div>

            <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
                {/* Mobile Header */}
                <div className="md:hidden flex items-center justify-between bg-teal-800 text-white p-4 shadow-md">
                    <h1 className="text-lg font-bold">Dashboard</h1>
                    <button onClick={() => setSidebarOpen(!sidebarOpen)}>
                        <Menu size={24} />
                    </button>
                </div>

                {/* Sidebar */}
                <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

                {/* Main Content */}
                <div className="flex-1 p-4">
                    <Outlet />
                </div>
            </div>
            <div className='hidden md:block'>
                <Footer></Footer>
            </div>

        </>
    );
};

export default DashboardLayout;
