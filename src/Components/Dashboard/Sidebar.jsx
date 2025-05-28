import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../../Shared/Pro.css";
import { X } from 'lucide-react';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  const linkClass = (path) =>
    `block px-4 py-2 rounded-md transition-all duration-200 ${
      location.pathname === path
        ? 'bg-white text-teal-800 font-semibold'
        : 'hover:bg-teal-700'
    }`;

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-white bg-opacity-30 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div
        className={`fixed md:static top-0 md:mt-[92px] left-0 z-50 w-64 h-full md:min-h-screen bg-teal-900 text-gray-100 transform transition-transform duration-300 ease-in-out p-5 flex flex-col justify-between
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        {/* Close button for mobile */}
        <div className="md:hidden flex justify-end mb-4">
          <button onClick={() => setIsOpen(false)} className="text-white">
            <X size={24} />
          </button>
        </div>

        <nav className="space-y-3">
          <Link to="/dashboard" className={linkClass('/dashboard')}>
            Dashboard Home
          </Link>
          <Link to="/dashboard/tasks" className={linkClass('/dashboard/tasks')}>
            Tasks
          </Link>
          <Link to="/dashboard/add" className={linkClass('/dashboard/add')}>
            Add Tasks
          </Link>
          <Link to="/dashboard/goals" className={linkClass('/dashboard/goals')}>
            Goals
          </Link>
          <Link to="/dashboard/quote" className={linkClass('/dashboard/quote')}>
            Motivational Quote
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
