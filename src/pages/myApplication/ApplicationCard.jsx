import React from 'react';
import { Link } from 'react-router';

const ApplicationCard = ({ app }) => {
    return (
        <div className="card bg-white shadow-md rounded-xl hover:shadow-lg transition-all duration-300">
            <div className="card-body">
                <div className="flex items-center gap-3">
                    <img
                        src={app.company_logo}
                        alt={app.company}
                        className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                        <h3 className="font-semibold text-base">{app.title}</h3>
                        <p className="text-gray-500 text-xs">{app.company}</p>
                        <p className="text-gray-500 text-xs">{app.location}</p>
                    </div>
                </div>

                <p className="text-gray-600 mt-3 line-clamp-2">{app.description}</p>

                {/* <div className="flex justify-between items-center mt-4">
                    {/* <span
                        className={`text-sm px-3 py-1 rounded-full ${app.status === "Pending"
                                ? "bg-yellow-100 text-yellow-700"
                                : app.status === "Interview"
                                    ? "bg-blue-100 text-blue-700"
                                    : app.status === "Rejected"
                                        ? "bg-red-100 text-red-700"
                                        : "bg-green-100 text-green-700"
                            }`}
                    >
                        {app.status}
                    </span> */}

                    {/* <button
                        onClick={() => onView(app)}
                        className="btn btn-sm bg-[#38a3a5] text-white hover:bg-[#2c7d7e]"
                    >
                        View Details
                    </button> */}
                {/* </div> */}

                <div className="flex justify-between items-center mt-2 w-full">
                    <p className="text-gray-500 text-base sm:text-base">
                        <span className="text-[#38a3a5] font-bold text-base sm:text-base">€14</span>/Hour
                    </p>
                    <Link >
                    <button className="btn text-[#2a7c7e] bg-[#c8f1f2] border border-[#9fd7d8] transition-all duration-300 hover:bg-[#38a3a5] hover:text-white text-xs sm:text-sm">
                        Details
                    </button>
                    </Link>
                </div> 
            </div>
        </div>
    );
};

export default ApplicationCard;