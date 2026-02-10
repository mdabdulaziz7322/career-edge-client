import React, { useContext, useEffect, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { JobsContext } from '../../context/JobsContext/JobsProvider';
import JobsCard from './JobsCard';
import Subscription from '../Shared/Subscription';

const AllJobs = () => {

    const { jobs, loading } = useContext(JobsContext);
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 12;
    const totalPages = Math.ceil(jobs.length / jobsPerPage);

    const startIndex = (currentPage - 1) * jobsPerPage;
    const lastIndex = startIndex + jobsPerPage;
    const currentJobs = jobs.slice(startIndex, lastIndex);

    const jobsRef = useRef(null);
    const navbarHeight = 100;

    useEffect(() => {
        if (jobsRef.current) {
            const top = jobsRef.current.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            window.scrollTo({ top: top, behavior: 'smooth' });
        }
    }, [currentPage]);

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };


    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };

    if (loading)
        return (
            <div className="flex justify-center items-center h-[80vh]">
                <div className="w-10 h-10 border-4 border-t-[#4993FA] border-gray-200 rounded-full animate-spin"></div>
            </div>
        );
    return (
        <div>
            <div className=" min-h-screen p-6 mt-5 max-w-7xl mx-auto">
                {/* ===== Header Section ===== */}
                <div className="text-center mb-10 mt-20 ">
                    <h2 className="text-3xl font-bold text-[#154f4e] ">
                        <span className='text-[#4993FA] '>{jobs.length}</span> Jobs Available Now
                    </h2>
                    <p className="text-gray-500">
                        Showcase your professional journey and experience in one place. Explore the roles I’ve held, the skills I’ve gained, and the impact I’ve made.
                    </p>
                </div>

                {/* ===== Search & Filter Bar ===== */}
                <div className="flex flex-wrap justify-center items-center gap-4 mb-8 shadow-sm p-5 rounded-2xl">
                    <input
                        type="text"
                        placeholder="Industry"
                        className="border rounded-lg px-4 py-2 w-48 text-sm focus:outline-none focus:ring-1 focus:ring-[#4993FA]"
                    />
                    <input
                        type="text"
                        placeholder="Location"
                        className="border rounded-lg px-4 py-2 w-48 text-sm focus:outline-none focus:ring-1 focus:ring-[#4993FA]"
                    />
                    <input
                        type="text"
                        placeholder="Your keyword..."
                        className="border rounded-lg px-4 py-2 w-64 text-sm focus:outline-none focus:ring-1 focus:ring-[#4993FA]"
                    />
                    <button className="flex items-center gap-2 bg-[#4993FA] text-white px-5 py-2 rounded-lg hover:bg-[#4993FA] transition-all">
                        <FaSearch /> Search
                    </button>
                </div>

                {/* ===== Main Layout ===== */}
                <div className="grid grid-cols-12 gap-6">
                    {/* ----- Sidebar Filter ----- */}
                    <aside className="col-span-12 lg:col-span-3 bg-[#F4F7FF] p-5 rounded-2xl shadow-sm ">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-[#154f4e] text-xl">Advance Filter</h3>
                            <button className="text-sm text-[#4993FA] underline">Reset</button>
                        </div>

                        {/* Location Filter */}
                        <div className="mb-6">
                            <label className="font-bold text-gray-700 text-lg">Location</label>
                            <input
                                type="text"
                                placeholder="Enter location"
                                className="w-full border rounded-lg p-2 mt-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#38a3a5]"
                            />
                        </div>

                        {/* Industry Filter */}
                        <div className="mb-6">
                            <label className="font-bold text-gray-700 text-lg">Industry</label>
                            <div className="flex flex-col gap-2 mt-2 text-md">
                                {["Software", "Finance", "Marketing", "Recruiting", "Management"].map(
                                    (item, index) => (
                                        <label key={index} className="flex items-center justify-between gap-2">
                                            <div className="flex items-center gap-2">
                                                <input type="checkbox" /> {item}
                                            </div>
                                            <span className="bg-[#4993FA] text-white px-2 text-md">{index + 1}</span>
                                        </label>
                                    )
                                )}
                            </div>
                        </div>

                        {/* Salary Range */}
                        <div className="mb-6">
                            <label className="font-bold text-gray-700 text-lg">Salary Range</label>
                            <input type="range" min="0" max="500" className="w-full mt-2" style={{ accentColor: '#4993FA' }} />
                            <div className="flex justify-between text-md text-gray-500">
                                <span>$0</span>
                                <span>$500</span>
                            </div>
                        </div>

                        {/* Work Mode Filter */}
                        <div className="mb-6">
                            <label className="font-bold text-gray-700 text-lg">Work Mode</label>
                            <div className="flex flex-col gap-2 mt-2 text-md">
                                {["Onsite", "Remote", "Hybrid"].map((mode, index) => (
                                    <label key={index} className="flex items-center justify-between gap-2">
                                        <div className="flex items-center gap-2">
                                            <input type="radio" name="workMode" /> {mode}
                                        </div>
                                        <span className=" text-md bg-[#4993FA] text-white px-2">{index + 1}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Job Posted Filter */}
                        <div className="mb-6">
                            <label className="font-bold text-gray-700 text-lg">Job Posted</label>
                            <div className="flex flex-col gap-2 mt-2 text-md">
                                {["Last 24 hours", "Last 3 days", "Last 7 days", "Last 30 days"].map(
                                    (period, index) => (
                                        <label key={index} className="flex items-center justify-between gap-2">
                                            <div className="flex items-center gap-2">
                                                <input type="radio" name="jobPosted" /> {period}
                                            </div>
                                            <span className="bg-[#4993FA] text-white px-2 text-md">{index + 1}</span>
                                        </label>
                                    )
                                )}
                            </div>
                        </div>

                        {/* Job Type Filter */}
                        <div className="mb-6">
                            <label className="font-bold text-gray-700 text-lg">Job Type</label>
                            <div className="flex flex-col gap-2 mt-2 text-md">
                                {["Full-time", "Part-time", "Contract", "Internship"].map((type, index) => (
                                    <label key={index} className="flex items-center justify-between gap-2">
                                        <div className="flex items-center gap-2">
                                            <input type="checkbox" /> {type}
                                        </div>
                                        <span className="bg-[#4993FA] text-white px-2 text-md">{index + 1}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </aside>




                    {/* ----- Job Listing Area ----- */}
                    <main className="col-span-12 lg:col-span-9">
                        {/* Toolbar */}
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-gray-600 text-md">Showing 1–12 of {jobs.length} jobs</p>
                            <select className="border border-[#4993FA] rounded-lg p-2 text-md focus:outline-none focus:ring-1 focus:ring-[#4993FA]">
                                <option>Newest Post</option>
                                <option>Oldest Post</option>
                                <option>Highest Salary</option>
                            </select>
                        </div>

                        {/* Job Cards Grid */}
                        <div ref={jobsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                            {
                                currentJobs.map(job => <JobsCard job={job}></JobsCard>)
                            }

                        </div>
                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mt-8 sm:mt-10">
                                {/* Prev Button */}
                                <button
                                    onClick={handlePrev}
                                    disabled={currentPage === 1}
                                    className={`px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg border text-[#4993FA] transition-all ${currentPage === 1
                                        ? "opacity-50 cursor-not-allowed"
                                        : "hover:bg-[#4993FA] hover:text-white"
                                        }`}
                                >
                                    Prev
                                </button>

                                {/* Page Numbers */}
                                <div className="flex flex-wrap justify-center gap-2">
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                        <button
                                            key={page}
                                            onClick={() => setCurrentPage(page)}
                                            className={`w-8 sm:w-10 h-8 sm:h-10 rounded-lg border flex items-center justify-center text-sm sm:text-base transition-all ${currentPage === page
                                                ? "bg-[#4993FA] text-white border-[#4993FA]"
                                                : "text-[#4993FA] hover:bg-[#4993FA] hover:text-white"
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    ))}
                                </div>

                                {/* Next Button */}
                                <button
                                    onClick={handleNext}
                                    disabled={currentPage === totalPages}
                                    className={`px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg border text-[#4993FA] transition-all ${currentPage === totalPages
                                        ? "opacity-50 cursor-not-allowed"
                                        : "hover:bg-[#4993FA] hover:text-white"
                                        }`}
                                >
                                    Next
                                </button>
                            </div>
                        )}

                    </main>
                </div>
            </div>
            <div className='mb-10'>
                <Subscription></Subscription>
            </div>
        </div>
    );
};

export default AllJobs;