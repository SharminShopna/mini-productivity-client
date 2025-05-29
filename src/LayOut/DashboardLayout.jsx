import React, { useContext, useState } from 'react';
import Sidebar from '../Components/Dashboard/Sidebar';
import { Link, Outlet } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import logo from '../assets/logo/logo2.png';
import { AuthContext } from '../AuthProvider/AuthProvider';

const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { isDarkMode } = useContext(AuthContext);

    const bgColor = isDarkMode ? 'bg-gray-900 text-white' : 'bg-teal-50 text-black';

    return (
        <>
            <div className='hidden md:block'>
                <Navbar />
            </div>

            <div className={`min-h-screen flex flex-col md:flex-row transition-colors duration-300 ${bgColor}`}>
                {/* Mobile Header */}
                <div className={`md:hidden flex items-center justify-between p-4 shadow-md ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-teal-800 text-white'}`}>
                    <Link to="/" className="flex items-center gap-2">
                        <img src={logo} alt="Logo" className="h-8 w-8 rounded-full" />
                        <h2 className="font-semibold">
                            <span className="text-3xl font-semibold">P</span>rodigy
                            <span className="text-3xl font-semibold">B</span>oard
                        </h2>
                    </Link>
                    <button onClick={() => setSidebarOpen(!sidebarOpen)}>
                        <Menu size={24} />
                    </button>
                </div>

                {/* Sidebar */}
                <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} isDarkMode={isDarkMode} />

                {/* Main Content */}
                <div className="flex-1 p-4">
                    <Outlet />
                </div>
            </div>

            <div className='hidden md:block'>
                <Footer />
            </div>
        </>
    );
};

export default DashboardLayout;
