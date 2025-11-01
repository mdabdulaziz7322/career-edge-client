import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import icon from '../../assets/pics/icons8-job-website-28.png';
import { IoIosArrowDropdown } from "react-icons/io";


const NavBar = () => {
    const { user, singOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    
    const [profileOpen, setProfileOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // Fetch user data
 

    const handleSignOut = () => {
        singOutUser()
            .then(() => navigate("/"))
            .catch((err) => console.error(err));
    };

    const handleNavigate = (path) => {
        setMenuOpen(false);
        setProfileOpen(false);
        navigate(path);
    };

    const commonLinks = [
        { label: "Home", path: "/" },
        { label: "Recruiters", path: "/recruiters" },
        { label: "Candidates", path: "/candidates" },
        { label: "Blog", path: "/blog" },
        { label: "About Us", path: "/about-us" },
    ];

    // Role-based profile links
    const profileLinks = [
        { label: "My Profile", path: "/profile" },
        { label: "Dashboard", path: "/dashboard" },
        { label: "My Applications", path: "/my-application" },
        { label: "Add a Job", path: "/add-job" },

    ];

    return (
        <div className="relative">
            <div className="navbar shadow-sm bg-[#f4fdfd] px-4 sm:px-6">
                {/* Logo */}
                <div className="navbar-start">
                    <Link to="/">
                        <div className="flex items-center gap-1">
                            <img src={icon} alt="logo" className="w-8 h-8 sm:w-10 sm:h-10" />
                            <div className="text-2xl font-bold text-[#38a3a5]">
                                C@ <span className="text-[#ff7d00]">EDGE</span>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Center links - large screens */}
                <div className="navbar-center hidden lg:flex gap-6 text-[#154f4e] font-semibold ">
                    {commonLinks.map((link, i) => (
                        <button className='hover:cursor-pointer' key={i} onClick={() => handleNavigate(link.path)}>
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* Right side */}
                <div className="navbar-end flex items-center gap-3">
                    {!user ? (
                        <>
                            <button
                                onClick={() => handleNavigate("/register")}
                                className="underline text-[#154f4e]"
                            >
                                Register
                            </button>
                            <button
                                onClick={() => handleNavigate("/signin")}
                                className="btn bg-[#38a3a5] text-white rounded-lg px-4"
                            >
                                Sign In
                            </button>
                        </>
                    ) : (
                        <>
                            {/* Mobile hamburger menu */}
                            <div className="lg:hidden relative">
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
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h8m-8 6h16"
                                        />
                                    </svg>
                                </button>

                                {menuOpen && (
                                    <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow absolute right-0 text-[#154f4e] z-50">
                                        {commonLinks.map((link, i) => (
                                            <li key={i}>
                                                <button
                                                    onClick={() => handleNavigate(link.path)}
                                                    className="w-full text-left px-2 py-1 rounded hover:bg-[#38a3a5] hover:text-white"
                                                >
                                                    {link.label}
                                                </button>
                                            </li>
                                        ))}

                                        {profileLinks.map((link, i) => (
                                            <li key={i}>
                                                <button
                                                    onClick={() => handleNavigate(link.path)}
                                                    className="w-full text-left px-2 py-1 rounded hover:bg-[#38a3a5] hover:text-white"
                                                >
                                                    {link.label}
                                                </button>
                                            </li>
                                        ))}

                                        <li>
                                            <button
                                                onClick={handleSignOut}
                                                className="w-full text-left px-2 py-1 rounded hover:bg-[#38a3a5] hover:text-white"
                                            >
                                                Sign Out
                                            </button>
                                        </li>
                                    </ul>
                                )}
                            </div>

                            {/* Profile dropdown - large screens */}
                            <div className="hidden lg:block relative ">
                                <button
                                    onClick={() => setProfileOpen(!profileOpen)}
                                    className="flex items-center gap-1 focus:outline-none hover:cursor-pointer"
                                >
                                    <img
                                        src="https://i.ibb.co/5hPWHwRs/profile-icon.png"
                                        alt="profile"
                                        className="w-10 h-10 rounded-full border-2 border-[#38a3a5]"
                                    />

                                </button>

                                {profileOpen && (
                                    <ul className="absolute right-0 mt-3 w-48 bg-white border border-gray-200 shadow-lg rounded-xl text-[#154f4e] p-2 z-50">
                                        {profileLinks.map((link, i) => (
                                            <li key={i}>
                                                <button
                                                    onClick={() => handleNavigate(link.path)}
                                                    className="block w-full text-left px-2 py-1 rounded hover:bg-[#38a3a5] hover:text-white"
                                                >
                                                    {link.label}
                                                </button>
                                            </li>
                                        ))}
                                        <li>
                                            <button
                                                onClick={handleSignOut}
                                                className="block w-full text-left px-2 py-1 rounded hover:bg-[#38a3a5] hover:text-white"
                                            >
                                                Sign Out
                                            </button>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;