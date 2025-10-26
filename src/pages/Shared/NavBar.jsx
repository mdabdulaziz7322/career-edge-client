import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import icon from '../../assets/pics/icons8-job-website-28.png';
import { IoIosArrowDropdown } from "react-icons/io";

const NavBar = () => {
    const { user, singOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSignOut = () => {
        setLoading(true);
        singOutUser()
            .then(() => {
                setLoading(false);
                console.log("Sign out successful");
            })
            .catch((error) => {
                setLoading(false);
                console.error(error);
            });
    };

    const handleNavigate = (path) => {
        setMenuOpen(false); // close menu
        setLoading(true);   // show loader
        setTimeout(() => {
            setLoading(false);
            navigate(path);
        }, 500); // simulate loading
    };

    // Dropdown menu items
    const menuLinks = (
        <>
            <li>
                <button
                    onClick={() => handleNavigate("/")}
                    className="w-full text-left rounded px-2 py-1 transition-colors duration-300 hover:bg-[#38a3a5] hover:text-white"
                >
                    Home
                </button>
            </li>
            <li>
                <button
                    onClick={() => handleNavigate("/find-job")}
                    className="w-full text-left rounded px-2 py-1 transition-colors duration-300 hover:bg-[#38a3a5] hover:text-white"
                >
                    Find a Job
                </button>
            </li>
            <li>
                <button
                    onClick={() => handleNavigate("/recruiters")}
                    className="w-full text-left rounded px-2 py-1 transition-colors duration-300 hover:bg-[#38a3a5] hover:text-white"
                >
                    Recruiters
                </button>
            </li>
            <li>
                <button
                    onClick={() => handleNavigate("/candidates")}
                    className="w-full text-left rounded px-2 py-1 transition-colors duration-300 hover:bg-[#38a3a5] hover:text-white"
                >
                    Candidates
                </button>
            </li>
            <li>
                <button
                    onClick={() => handleNavigate("/blog")}
                    className="w-full text-left rounded px-2 py-1 transition-colors duration-300 hover:bg-[#38a3a5] hover:text-white"
                >
                    Blog
                </button>
            </li>
            <li>
                <button
                    onClick={() => handleNavigate("/about-us")}
                    className="w-full text-left rounded px-2 py-1 transition-colors duration-300 hover:bg-[#38a3a5] hover:text-white"
                >
                    About Us
                </button>
            </li>

            {!user ? (
                <>
                    <li>
                        <button
                            onClick={() => handleNavigate("/register")}
                            className="w-full text-left rounded px-2 py-1 transition-colors duration-300 hover:bg-[#38a3a5] hover:text-white"
                        >
                            Register
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleNavigate("/signin")}
                            className="w-full text-left rounded px-2 py-1 transition-colors duration-300 hover:bg-[#38a3a5] hover:text-white"
                        >
                            Sign In
                        </button>
                    </li>
                </>
            ) : (
                <li>
                    <button
                        onClick={handleSignOut}
                        className="w-full text-left rounded px-2 py-1 transition-colors duration-300 hover:bg-[#38a3a5] hover:text-white"
                    >
                        Sign Out
                    </button>
                </li>
            )}
        </>
    );

    return (
        <div className="relative">
            {/* Loader overlay */}
            {loading && (
                <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
                    <div className="w-12 h-12 border-4 border-t-[#38a3a5] border-gray-200 rounded-full animate-spin"></div>
                </div>
            )}

            <div className="navbar shadow-sm navbar fixed top-0 left-0 right-0 z-50 bg-[#f4fdfd] text-white px-4 sm:px-6 lg:px-12">
                {/* Logo */}
                <div className="navbar-start">
                    <Link to={"/"}>
                        <div className="flex items-center gap-1">
                            <img src={icon} alt="logo" className="w-8 h-8 sm:w-10 sm:h-10" />
                            <div className="text-2xl font-bold text-[#38a3a5]">
                                C@ <span className="text-[#ff7d00]">EDGE</span>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Horizontal links for large screens */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[#154f4e] font-semibold gap-2">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/find-job">Find a Job</NavLink>
                        </li>
                        <li>
                            <NavLink to="/recruiters">Recruiters</NavLink>
                        </li>
                        <li>
                            <NavLink to="/candidates">Candidates</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about-us">About Us</NavLink>
                        </li>
                    </ul>
                </div>

                {/* Hamburger menu for small screens */}
                <div className="navbar-end lg:hidden">
                    <div className="dropdown dropdown-end relative">
                        <button
                            className="btn btn-ghost text-[#154f4e]"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </button>

                        <ul
                            className={`menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow text-[#154f4e] absolute right-0 ${menuOpen ? "block" : "hidden"
                                }`}
                        >
                            {menuLinks}
                        </ul>
                    </div>
                </div>

                {/* Auth buttons for large screens */}
                <div className="hidden lg:flex navbar-end gap-4">
                    {!user ? (
                        <>
                            <NavLink to="/register">
                                <span className="text-[#154f4e] underline">Register</span>
                            </NavLink>
                            <NavLink to="/signin">
                                <button className="btn bg-[#38a3a5] rounded-lg text-white px-4 py-2 border-none">
                                    Sign In
                                </button>
                            </NavLink>
                        </>
                    ) : (
                        <button onClick={handleSignOut} className="btn btn-sm bg-[#38a3a5] text-white">
                            Sign Out
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;