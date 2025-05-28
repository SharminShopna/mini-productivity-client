// DashboardLayout.jsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Dashboard/Sidebar';
import { Menu } from 'lucide-react';
import "../Shared/Pro.css"
import "../../src/index.css"

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-tealGreen">
      {/* Sidebar */}
      <div
        className={`transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:static fixed z-50`}
      >
        <Sidebar toggleSidebar={() => setIsOpen(false)} />
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-teal-50 md:ml-64">
        {/* Mobile Menu Button */}
        <div className="md:hidden p-4">
          <button
            className="text-teal-800 text-2xl"
            onClick={() => setIsOpen(true)}
          >
            <Menu />
          </button>
        </div>

        <div className="p-6 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
