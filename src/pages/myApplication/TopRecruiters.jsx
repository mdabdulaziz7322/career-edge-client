import React, { useContext, useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';
import { JobsContext } from '../../context/JobsContext/JobsProvider';


const TopRecruiters = () => {

    const { jobs: TotalRecruiters, loading } = useContext(JobsContext); // use context
    const recruiters = TotalRecruiters.slice(0, 15);
    const [currentPage, setCurrentPage] = useState(1);
    const recruitersPerPage = 5;

    const totalPages = Math.ceil(recruiters.length / recruitersPerPage);
    const startIndex = (currentPage - 1) * recruitersPerPage;
    const currentRecruiters = recruiters.slice(
        startIndex,
        startIndex + recruitersPerPage
    );

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };

    return (
        <div className="bg-[#f4fdfd] border border-[#d2f0f0] rounded-2xl shadow-sm p-5 h-fit sticky top-24">
            <h2 className="text-xl font-semibold text-[#154f4e] mb-4 text-center">
                Top Recruiters
            </h2>

            {loading ? (
                <div className="flex justify-center items-center py-10">
                    <div className="w-8 h-8 border-4 border-t-[#38a3a5] border-gray-200 rounded-full animate-spin"></div>
                </div>
            ) : (
                <>
                    <div className="space-y-4">
                        {currentRecruiters.map((rec, index) => (
                            <div
                                key={rec.id || index}
                                className="flex items-center gap-4 p-3 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
                            >
                                <img
                                    src={rec.company_logo || "https://via.placeholder.com/80"}
                                    alt={rec.name}
                                    className="w-12 h-12 rounded-lg object-cover border border-[#d2f0f0]"
                                />
                                <div className="flex items-center justify-between gap-3 w-full">
                                    <div>
                                        <h3 className="font-semibold text-[#154f4e]">
                                            {rec.name || "Unnamed Recruiter"}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {rec.location || "Unknown Location"}
                                        </p>
                                    </div>
                                    <div className="flex items-center text-yellow-500 text-sm mt-1">
                                        {(() => {
                                            // generate a random rating between 1 and 5
                                            const rating = Math.floor(Math.random() * 5) + 1;
                                            return (
                                                <>
                                                    {[...Array(5)].map((_, i) => (
                                                        <FaStar
                                                            key={i}
                                                            className={i < rating ? "text-yellow-400" : "text-gray-300"}
                                                        />
                                                    ))}
                                                    <span className="ml-1 text-gray-600">{rating}.0</span>
                                                </>
                                            );
                                        })()}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-4 mt-6">
                            <button
                                onClick={handlePrev}
                                disabled={currentPage === 1}
                                className={`p-2 rounded-full border ${currentPage === 1
                                        ? "opacity-50 cursor-not-allowed"
                                        : "hover:bg-[#38a3a5] hover:text-white"
                                    } border-[#38a3a5] text-[#38a3a5] transition-all duration-300`}
                            >
                                <FaArrowLeft />
                            </button>

                            <span className="text-[#154f4e] font-medium">
                                Page {currentPage} of {totalPages}
                            </span>

                            <button
                                onClick={handleNext}
                                disabled={currentPage === totalPages}
                                className={`p-2 rounded-full border ${currentPage === totalPages
                                        ? "opacity-50 cursor-not-allowed"
                                        : "hover:bg-[#38a3a5] hover:text-white"
                                    } border-[#38a3a5] text-[#38a3a5] transition-all duration-300`}
                            >
                                <FaArrowRight />
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default TopRecruiters;