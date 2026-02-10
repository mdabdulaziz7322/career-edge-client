import React from 'react';
import { Link } from 'react-router';

const MyJobsCard = ({ job }) => {
    return (
        <div>
            <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition-all mb-10">
                <div className='flex justify-between items-center'>
                    <div className="flex items-center gap-3 mb-3">
                        <img
                            src={job.company_logo || "https://via.placeholder.com/60"}
                            alt={job.company}
                            className="w-15 h-15 rounded-lg border"
                        />
                        <div>
                            <h4 className="font-semibold text-2xl text-[#154f4e]">{job.company}</h4>
                            <p className="text-gray-500 text-sm">{job.location}</p>
                        </div>
                    </div>
                    <div>
                        <span className="font-semibold text-2xl text-[#4993FA]">
                            €{job.salaryRange.min} - {job.salaryRange.max}/Year
                        </span>
                    </div>
                </div>

                <h3 className="text-2xl font-semibold mb-2 text-[#154f4e]">{job.title}</h3>
                <p className="text-gray-500 text-base mb-3 line-clamp-2 pr-20 ">
                    {job.description || "No description available"}
                </p>
                <div className='flex justify-between items-center'>
                    <div className="">
                        <span className="text-base text-gray-500">{job.type || "Fulltime"}</span>
                        <p className="text-gray-500 text-base"> HR: {job.hr_name}</p>
                        <p className="text-base text-gray-500">ApplicationDeadline: {job.applicationDeadline}</p>
                        <p className="text-base text-gray-500">HR Email: {job.hr_email}</p>

                    </div>


                    <div className='text-right flex gap-2'>
                        <Link to={`/job/${job._id}`}>
                            <button className="mt-4 px-5  bg-[#4993FA] text-white rounded-lg py-2 font-medium hover:bg-[#2c8587] transition">
                                Show Details
                            </button>
                        </Link>
                        <Link to={`/applications/${job._id}`}>
                            <button className="mt-4 px-5  bg-[#4993FA] text-white rounded-lg py-2 font-medium hover:bg-[#2c8587] transition">
                                Applications ( )
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyJobsCard;