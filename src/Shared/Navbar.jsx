import React, { useContext, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo/logo2.png";
import "../App.css";
import "../Shared/Pro.css";
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaRegCircleUser } from "react-icons/fa6";
import { FaSun, FaMoon } from "react-icons/fa";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
    const { user, logout, isDarkMode, setIsDarkMode } = useContext(AuthContext);

    //  Set body background based on mode
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark");
            document.body.classList.remove("bg-teal-50");
            document.body.style.backgroundColor = "black";
        } else {
            document.body.classList.remove("dark");
            document.body.classList.add("bg-teal-50");
            document.body.style.backgroundColor = "#f0fdfa";
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const links = (
        <>
            <li>
                <NavLink to="/" className="btn proCardButton">Home</NavLink>
            </li>
            {user && (
                <li>
                    <NavLink to="/dashboard" className="btn proCardButton">
                        Dashboard
                    </NavLink>
                </li>
            )}
        </>
    );

    return (
        <>
            <div className="w-full justify-center flex">
                <div className="pt-5 fixed w-full bg-teal-800 top-0 z-50 backdrop-filter backdrop-blur-lg bg-opacity-30">
                    <div className="navbar flex justify-between items-center mx-auto md:px-12">
                        <div className="navbar-start space-x-2">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost text-gray-200 hover:text-teal-950 lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                    </svg>
                                </div>
                                <ul tabIndex={0} className="menu text-white menu-sm dropdown-content bg-teal-800 hover:bg-teal-600 rounded-b-lg z-[1] mt-3 w-52 p-2 shadow">
                                    {links}
                                </ul>
                            </div>
                            <div className="flex gap-1 space-x-2 text-center items-center justify-center text-gray-200">
                                <img className="w-12 h-12 rounded-full" src={logo} alt="logo" />
                                <h2 className="font-semibold">
                                    <span className="text-3xl font-semibold">P</span>rodigy<span className="text-3xl font-semibold">B</span>oard
                                </h2>
                            </div>
                        </div>

                        <div className="navbar-center text-gray-200 hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 bg-teal-800 gap-2">{links}</ul>
                        </div>

                        <div className="navbar-end space-x-2">
                            {user && user?.email ? (
                                <div className="text-center space-x-2 image">
                                    <div className="dropdown dropdown-end">
                                        <div
                                            tabIndex={0}
                                            role="button"
                                            className="btn btn-ghost btn-circle avatar tooltip"
                                            data-tooltip-id="profile-tooltip"
                                            data-tooltip-content={user?.displayName}
                                        >
                                            <div className="w-12 rounded-full">
                                                <img alt="User Profile" src={user?.photoURL} />
                                            </div>
                                        </div>
                                    </div>
                                    <Tooltip id="profile-tooltip" />
                                </div>
                            ) : null}

                            {user && user?.email ? (
                                <button onClick={logout} className="btn proCardButton">Logout</button>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        className="btn proCardButton"
                                        data-tooltip-id="my-tooltip"
                                        data-tooltip-content="Please use your correct email and password"
                                    >
                                        Sign In
                                    </Link>
                                    <NavLink
                                        to="/register"
                                        className="btn proCardButton"
                                        data-tooltip-id="my-tooltip"
                                        data-tooltip-content="Please Register with your personal information"
                                    >
                                        Sign Up
                                    </NavLink>
                                </>
                            )}

                            <button onClick={toggleDarkMode} className="btn proCardButton">
                                {isDarkMode ? <FaSun /> : <FaMoon />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
