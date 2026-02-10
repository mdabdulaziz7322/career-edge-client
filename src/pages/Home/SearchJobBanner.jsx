import React from 'react';
import { Link } from 'react-router';



const SearchJobBanner = () => {
    return (
        <section className="py-16 px-4 max-w-6xl mx-auto ">
            <div className=" flex flex-col md:flex-row items-center justify-between gap-30">
                {/* Left - Big Image with overlapping second image */}
                <div className="w-full md:w-1/2 relative">
                    {/* Big Image */}
                    <img
                        src="https://i.ibb.co/LXwxXgyB/thums.jpg"
                        alt="Jobs"
                        className="w-full h-auto object-cover rounded-lg"
                    />

                    {/* Overlapping Second Image */}
                    <img
                        src="https://i.ibb.co/dwysHNSw/19201.jpg"
                        alt="Overlay"
                        className="w-32 h-32 md:w-50 md:h-50 object-cover rounded-lg shadow-lg border border-gray-200 absolute bottom-15 right-15 transform translate-x-1/2 translate-y-1/2"
                    />
                </div>

                {/* Right - Text Content */}
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                    {/* Heading */}
                    <h2 className="text-5xl md:text-5xl font-bold">
                        <span className="text-gray-700 text-5xl uppercase">Millions Of Jobs.</span>
                        <br />
                        <span className="text-3xl md:text-2xl uppercase text-gray-900 font-semibold">
                            Find The One That’s Right For You.
                        </span>
                    </h2>

                    {/* Paragraph */}
                    <p className="text-gray-600 text-lg">
                        Search all the open positions on the web. Get your own personalized salary estimate.
                        Read reviews on over 600,000 companies worldwide. The right job is out there.
                    </p>

                    {/* Buttons */}
                    <div className="flex items-center gap-6 mt-4">
                        <Link to= 'all-jobs'>
                            <button className="px-6 py-3 bg-[#4993FA] text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                                Search Jobs
                            </button>
                        </Link>
                       <Link to = 'about-us'>
                        <button className="text-[#4993FA] font-semibold underline hover:text-blue-800 transition">
                            Learn More
                        </button>
                       </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchJobBanner;