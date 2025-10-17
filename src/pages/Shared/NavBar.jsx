import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import icon from '../../assets/pics/icons8-job-website-28.png';

const NavBar = () => {


    const { user, singOutUser } = use(AuthContext);

    const handleSignOut = () => {
        singOutUser()
            .then(() => {
                console.log('sign out successful');
            })
            .catch(error => console.error(error));
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>

    </>
    return (
        <div className="navbar shadow-sm bg-[#38a3a5] text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className="flex items-center gap-1">
                    <img src={icon} alt="" />
                    <a className=" text-xl font-bold">WORK <span className='text-[#ff7d00] text-2xl'>NEST</span></a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-5">
                {
                    user ? <button onClick={handleSignOut} className='btn'>Sign Out</button> :
                        <>
                            <NavLink to="/register"> Register</NavLink>
                            <NavLink to="/signin"><a className="btn">Sign in</a></NavLink>
                        </>
                }
            </div>
        </div>
    );
};

export default NavBar;