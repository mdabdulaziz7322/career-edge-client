import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { CiStopwatch } from "react-icons/ci";

const HotJobCard = ({ sampleJob }) => {

    const { company_logo, title, company, description, location, jobType, requirements, applicationDeadline } = sampleJob;


    return (
        <div className="card w-full px-1 py-4 bg-[#f4fdfd] border border-[#dff6f6] rounded-xl shadow-sm transition-all duration-300 hover:bg-white hover:shadow-md">
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
                <p>{description}</p>
                <div className="flex flex-wrap gap-2 mb-2 mt-2">
                    {requirements.map((req, idx) => (
                        <span
                            key={idx}
                            className="text-xs sm:text-sm bg-[#eefafa] text-[#8b949e] px-2 py-1 rounded break-words max-w-full"
                        >
                            {req}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between items-center mt-4 w-full">
                    <p className="text-gray-500 text-sm sm:text-base">
                        <span className="text-[#38a3a5] font-bold text-lg sm:text-xl">€14</span>/Hour
                    </p>
                    <button className="btn text-[#2a7c7e] bg-[#c8f1f2] border border-[#9fd7d8] transition-all duration-300 hover:bg-[#38a3a5] hover:text-white text-xs sm:text-sm">
                        Apply Now
                    </button>
                </div>
            </div>

        </div>
    );
};

export default HotJobCard;