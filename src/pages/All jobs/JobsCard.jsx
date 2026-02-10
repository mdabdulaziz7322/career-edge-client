import React from 'react';
import { Link } from 'react-router';

const JobsCard = ({ job }) => {
    return (
        <div>
            <div className="bg-[#F4F7FF] rounded-2xl shadow-sm p-5 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                    <img
                        src={job.company_logo || "https://via.placeholder.com/60"}
                        alt={job.company}
                        className="w-12 h-12 rounded-lg border"
                    />
                    <div>
                        <h4 className="font-semibold text-[#154f4e]">{job.company}</h4>
                        <p className="text-gray-500 text-sm">{job.location}</p>
                    </div>
                </div>

                <h3 className="text-lg font-semibold mb-2 text-[#154f4e]">{job.title}</h3>
                <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                    {job.description || "No description available"}
                </p>

                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{job.type || "Fulltime"}</span>
                    <span className="font-semibold text-[#4993FA]">
                        ${job.salary || "500"}/hour
                    </span>
                </div>

                <Link to={`/job/${job._id}`}>
                    <button className="mt-4 w-full text-[#4993FA]  bg-[#E0E6FF] py-3 rounded-2xl transition-all duration-300 hover:bg-[#4993FA] hover:text-white text-xs">
                        Show Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default JobsCard;