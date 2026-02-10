import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { CiStopwatch } from "react-icons/ci";
import { Link } from 'react-router';

const HotJobCard = ({ sampleJob }) => {

    const { company_logo, title, company, _id, location, jobType, applicationDeadline } = sampleJob;


    return (
        <div className="card w-full px-1 py-4 bg-[#F4F7FF] border border-[#dff6f6] rounded-xl shadow-sm transition-all duration-300 hover:bg-white hover:shadow-md">
            <div className='flex items-center gap-2'>
                <figure>
                    <img src={company_logo} alt={company} className="rounded-xl w-16 h-16 object-cover" />
                </figure>
                <div>
                    <h3 className='font-bold text-lg sm:text-xl'>{company}</h3>
                    <div className='flex items-center gap-1'>
                        <CiLocationOn />
                        <p className='text-xs sm:text-sm font-light text-gray-500'>{location}</p>
                    </div>
                </div>
            </div>

            <div className="card-body">
                <h2 className="card-title text-sm sm:text-base">{title}</h2>
                <div className='flex gap-2 my-2'>
                    <div className='flex items-center gap-1 '>
                        <LuBriefcaseBusiness />
                        <p className='text-sm font-light text-gray-400  '>{jobType}</p>
                    </div>

                    <div className='flex items-center gap-1 '>
                        <CiStopwatch size={20} />
                        <p className='text-sm font-light text-gray-400  ' >{applicationDeadline}</p>

                    </div>
                </div>
                <div className="flex justify-between items-center mt-2 w-full">
                    <p className="text-gray-500 text-sm sm:text-base">
                        <span className="text-[#4993FA] font-bold text-lg sm:text-xl">€14</span>/Hour
                    </p>
                    <Link to={`/job/${_id}`}>
                        <button className="w-full sm:w-auto px-3 py-2 rounded-lg font-semibold text-white bg-[#4993FA] hover:bg-blue-600 cursor-pointer transition-all duration-300 text-sm sm:text-base">
                            Show Details
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default HotJobCard;