
import { Link } from "react-router";
import HotJobCard from "./HotJobCard";
import Subscription from "../Shared/Subscription";


const HotJob = ({ hotJobs }) => {

    const sampleJobs = hotJobs;
    console.log(sampleJobs);
    const filters = [
        {
            name: "Management",
            icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24">
                <path d="M7 7h10M7 11h6M7 15h4" stroke="currentColor" strokeWidth="1.5" />
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" />
            </svg>
        ),
        },
        {
            name: "Marketing & Sale",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <path
                        d="M3 8l7-3v14L3 16V8zM10 5l11 7-11 7V5z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
        },
        {
            name: "Finance",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <path
                        d="M12 1v22M5 12h14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                </svg>
            ),
        },
        {
            name: "Human Resource",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
                    <path
                        d="M6 21v-2a6 6 0 0112 0v2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                </svg>
            ),
        },
        {
            name: "Retail & Products",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <rect x="4" y="6" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path
                        d="M4 10h16"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                </svg>
            ),
        },
        {
            name: "Content Writer",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <path
                        d="M7 7h10M7 11h6M7 15h4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                </svg>
            ),
        },
    ];

    return (
        <div className=" mx-auto px-4 sm:px-6 lg:px-12  max-w-7xl ">
            <div className="text-center  ">

                <div className="py-12">
                    <h2 className="text-3xl font-bold uppercase ">Jobs of the day</h2>
                    <p className=" text-[#154f4e] font-light">Discover new and exciting job openings every single day, carefully curated to match a variety of skills and industries. Career Edge helps you connect with leading employers, submit applications efficiently, and stay ahead in your job search journey.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mt-8 mb-10">
                    {filters.map((item, i) => (
                        <button
                            key={i}
                            className="flex items-center gap-2 px-4 py-2 border rounded-lg transition hover:bg-[#1E3A8A] hover:text-white border-gray-300 text-xs font-bold "
                        >
                            <span className="bg-indigo-50 text-blue-500">{item.icon}</span>
                            {item.name}
                        </button>
                        
                    ))}
                </div>


            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 ">
                {
                    sampleJobs.map(sampleJob => <HotJobCard key={sampleJob._id} sampleJob={sampleJob} ></HotJobCard>)
                }
            </div>
            <div className="">

            </div>
        </div>
    );
};

export default HotJob;