import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import icon from '/images/logo.png';
import { IoIosArrowDropdown } from "react-icons/io";
import router from '../../router/router';


const NavBar = () => {
    const { user, singOutUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [profileOpen, setProfileOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activePath, setActivePath] = useState(router.pathname);
    const [scrolled, setScrolled] = useState(false);



    // Fetch user data
    useEffect(() => {
        const handleScroll = () => {
            // Only apply scroll effect on home page
            if (location.pathname === '/') {
                setScrolled(window.scrollY > 100);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]); // rerun if route changes

    // Ensure navbar is white on non-home pages
    useEffect(() => {
        if (location.pathname !== '/') {
            setScrolled(true); // force white navbar
        }
    }, [location.pathname]);

    const handleSignOut = () => {
        singOutUser()
            .then(() => navigate("/"))
            .catch((err) => console.error(err));
    };

    const handleNavigate = (path) => {
        setMenuOpen(false);
        setProfileOpen(false);
        navigate(path);
        setActivePath(path);  // update active link
        router.push(path);
    };

    const commonLinks = [
        { label: "Home", path: "/" },
        { label: "Find a Job", path: "/all-jobs" },
        { label: "Blog", path: "/blog" },
        { label: "About Us", path: "/about-us" },
        { label: "Dashboard", path: "/dashboard-layout" }
    ];

    // Role-based profile links
    const profileLinks = [
        { label: "My Profile", path: "/profile" },
        { label: "My Applications", path: "/my-application" },
        { label: "Add a Job", path: "/add-job" },


    ];

    return (
        <div className="relative">
            <div className={`navbar fixed top-0 left-0 w-full z-50 py-5 transition-all duration-500 ease-in-out transform
  ${scrolled ? "bg-white " : "bg-[#F4F7FF]"} animate-slideDown  px-10`}>
                {/* Logo */}
                <div className="navbar-start">
                    <Link to="/">
                        <div className="">
                            <img src={icon} alt="logo" className="w-10 h-16 sm:w-50 sm:h-15" />
                            {/* <div className="text-2xl font-bold text-[#4993FA]">
                                C@ <span className="text-[#ff7d00]">EDGE</span>
                            </div> */}
                        </div>
                    </Link>
                </div>

                {/* Center links - large screens */}
                <div className="navbar-center hidden lg:flex  text-[#154f4e] text-sm  ">
                    {commonLinks.map((link, i) => (
                        <button
                            key={i}
                            onClick={() => handleNavigate(link.path)}
                            className={`px-4 py-2 rounded-lg relative ${activePath === link.path
                                ? "text-[#4993FA] after:block after:w-10 after:h-[3px] after:bg-[#4993FA] after:rounded-full after:mt-1"
                                : "bg-transparent hover:text-[#4993FA]"
                                }`}
                        >
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
                                className="btn bg-[#4993FA] text-white rounded-lg px-4"
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
                                        className="h-3 w-3"
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

                                        {/* {profileLinks.map((link, i) => (
                                            <li key={i}>
                                                <button
                                                    onClick={() => handleNavigate(link.path)}
                                                    className="w-full text-left px-2 py-1 rounded hover:bg-[#38a3a5] hover:text-white"
                                                >
                                                    {link.label}
                                                </button>
                                            </li>
                                        ))} */}

                                        <li>
                                            {/* <button
                                                onClick={handleSignOut}
                                                className="w-full text-left px-2 py-1 rounded hover:bg-[#38a3a5] hover:text-white"
                                            >
                                                Sign Out
                                            </button> */}
                                        </li>
                                    </ul>
                                )}
                            </div>

                             <button
                                onClick={handleSignOut}
                                className="btn bg-[#4993FA] text-white rounded-lg px-4"
                            >
                                Sign Out
                            </button>

                            {/* Profile dropdown - large screens */}
                            <div className="hidden lg:block relative ">
                                <button
                                    onClick={() => setProfileOpen(!profileOpen)}
                                    className="flex items-center gap-1 focus:outline-none hover:cursor-pointer"
                                >
                                    <img
                                        src="https://i.ibb.co/5hPWHwRs/profile-icon.png"
                                        alt="profile"
                                        className="w-8 h-8 rounded-full  "
                                    />

                                </button>

                                {profileOpen && (
                                    <ul className="absolute right-0 mt-3 w-48 bg-white border border-gray-200 shadow-lg rounded-xl text-[#154f4e]  p-2 z-50">
                                        {profileLinks.map((link, i) => (
                                            <li key={i}>
                                                <button
                                                    onClick={() => handleNavigate(link.path)}
                                                    className="block w-full text-left text-sm px-2 py-1 rounded hover:bg-[#4993FA] hover:text-white"
                                                >
                                                    {link.label}
                                                </button>
                                            </li>
                                        ))}
                                        <li>
                                            {/* <button
                                                onClick={handleSignOut}
                                                className="block w-full text-left text-sm px-2 py-1 rounded hover:bg-[#4993FA] hover:text-white"
                                            >
                                                Sign Out
                                            </button> */}
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div >
    );
};

export default NavBar;