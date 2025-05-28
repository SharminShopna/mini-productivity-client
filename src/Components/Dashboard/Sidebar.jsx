// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo2.png';
import "../../Shared/Pro.css"

const Sidebar = ({ toggleSidebar }) => {
  return (
    <div className="fixed md:static top-0 left-0 h-full min-h-screen z-50 w-64 bg-teal-800 text-gray-200 p-5 flex flex-col justify-between">
      {/* Top section */}
      <div>
        <div className="flex items-center justify-between md:justify-start mb-8">
          <Link to="/dashboard" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
            <span className="text-2xl font-bold tracking-wider">ProdigyBoard</span>
          </Link>
          <button className="md:hidden text-gray-200 text-2xl" onClick={toggleSidebar}>
            ✕
          </button>
        </div>

        {/* Navigation links */}
        <nav className="space-y-4">
          <Link to="/dashboard" className="block hover:text-white btn proCardButton ">Dashboard Home</Link>
          <Link to="/dashboard/tasks" className="block hover:text-white btn proCardButton">Tasks</Link>
          <Link to="/dashboard/goals" className="block hover:text-white btn proCardButton">Goals</Link>
          <Link to="/dashboard/quote" className="block hover:text-white btn proCardButton">Motivational Quote</Link>
        </nav>
      </div>

      {/* Bottom Logout button */}
      {/* <div className="mt-10">
        <button
          onClick={() => {
            // Dummy logout action, replace with real logic
            localStorage.removeItem('token');
            window.location.href = '/login';
          }}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded"
        >
          Logout
        </button>
      </div> */}
    </div>
  );
};

export default Sidebar;
