
import React from 'react';
import { Link } from 'react-router';




const LeftAside = () => {

    return (

        <div>
            <aside className="min-h-screen mt-20 w-64  text-white flex flex-col justify-between fixed lg:static">
                {/* Logo / Header */}
                <div className="p-6 text-center border-b border-[#0D1F3C]/20">
                    <h1 className="text-2xl font-bold tracking-wide">
                        <span className="text-[#0D1F3C]">Career</span>
                        <span className="text-[#2C5390]">Edge</span>
                    </h1>
                </div>

                {/* Menu */}
                <nav className="flex-1 px-4 py-6 space-y-2 justify-center items-center overflow-y-auto">
                    <Link to= "recruiters-dashboard">
                        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-base text-[#0D1F3C] font-medium hover:bg-white/15 hover:translate-x-1 transition-all duration-200">

                            <span>Dashboard</span>
                        </button></Link>


                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-base text-[#0D1F3C] font-medium hover:bg-white/15 hover:translate-x-1 transition-all duration-200">

                        <span>Candidates</span>
                    </button>

                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-base text-[#0D1F3C] font-medium hover:bg-white/15 hover:translate-x-1 transition-all duration-200">

                        <span>Recruiters</span>
                    </button>

                    <Link to="my-posted-jobs">
                        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-base text-[#0D1F3C] font-medium hover:bg-white/15 hover:translate-x-1 transition-all duration-200">

                            <span>My Jobs</span>
                        </button>
                    </Link>

                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-base text-[#0D1F3C] font-medium hover:bg-white/15 hover:translate-x-1 transition-all duration-200">

                        <span>Tasks List</span>
                    </button>

                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-base text-[#0D1F3C] font-medium hover:bg-white/15 hover:translate-x-1 transition-all duration-200">

                        <span>My Profile</span>
                    </button>

                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-base text-[#0D1F3C] font-medium hover:bg-white/15 hover:translate-x-1 transition-all duration-200">

                        <span>CV Manage</span>
                    </button>

                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-base text-[#0D1F3C] font-medium hover:bg-white/15 hover:translate-x-1 transition-all duration-200">

                        <span>Setting</span>
                    </button>

                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-base text-[#0D1F3C] font-medium hover:bg-white/15 hover:translate-x-1 transition-all duration-200">

                        <span>Authentication</span>
                    </button>

                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-base text-[#0D1F3C] font-medium hover:bg-white/15 hover:translate-x-1 transition-all duration-200">

                        <span>Logout</span>
                    </button>
                </nav>

                {/* Footer */}
                <div className="p-4 text-center text-sm border-t border-white/10 opacity-75">
                    © 2025 JobBox
                </div>

            </aside>
            <div className="bg-white p-4 rounded-lg  text-center ">
                {/* Circle Progress */}
                <div className="flex justify-center mb-3">
                    <div className="relative w-24 h-24">
                        <svg className="transform -rotate-90" viewBox="0 0 36 36">
                            <circle
                                className="text-gray-200"
                                strokeWidth="4"
                                stroke="currentColor"
                                fill="none"
                                cx="18"
                                cy="18"
                                r="16"
                            />
                            <circle
                                className="text-blue-500"
                                strokeWidth="4"
                                strokeLinecap="round"
                                stroke="currentColor"
                                fill="none"
                                cx="18"
                                cy="18"
                                r="16"
                                strokeDasharray="100"
                                strokeDashoffset="33"
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-gray-800">
                            67%
                        </div>
                    </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Profile Completed</h3>
                <p className="text-sm text-gray-400">
                    Please add detailed information to your profile. This will help you
                    develop your career more quickly.
                </p>
            </div>

            {/* Hiring Announcement Section */}
            <div className=" p-4 rounded-lg  text-center space-y-3">
                <h4 className="text-sm text-blue-300 uppercase font-medium">
                    We are
                </h4>
                <h3 className="text-lg font-bold text-blue-700">Hiring</h3>
                <p className="text-sm text-blue-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                    architecto.
                </p>
                <button className="text-blue-700 font-medium hover:underline">
                    Know More
                </button>
                {/* Illustration */}
                <img
                    src="/path-to-your-image.png"
                    alt="Hiring Illustration"
                    className="mx-auto mt-2 w-20"
                />
            </div>
        </div>
    );
};

export default LeftAside;