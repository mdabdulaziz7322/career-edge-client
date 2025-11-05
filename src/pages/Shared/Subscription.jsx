import React from 'react';

const Subscription = () => {
    return (
        <div className="w-full px-4 sm:px-6 lg:px-8 mb-10">
            <div className="bg-[#38a3a5] text-white rounded-3xl p-6 sm:p-10 relative overflow-hidden mt-16">
                {/* Floating Images */}
                <div className="hidden sm:block absolute top-6 left-4 sm:left-8 w-16 sm:w-20 h-16 sm:h-20 rounded-xl overflow-hidden">
                    <img
                        src="https://i.ibb.co/YBPRCLFh/celebrating.jpg"
                        alt="Team"
                        className="object-cover w-full h-full"
                    />
                </div>

                <div className="hidden sm:block absolute bottom-6 left-6 sm:left-12 w-20 sm:w-24 h-14 sm:h-16 rounded-xl overflow-hidden">
                    <img
                        src="https://i.ibb.co/1fbXmPxK/developing-team-2.jpg"
                        alt="Office"
                        className="object-cover w-full h-full"
                    />
                </div>

                <div className="hidden sm:block absolute top-10 right-6 sm:right-10 w-20 sm:w-24 h-14 sm:h-16 rounded-xl overflow-hidden">
                    <img
                        src="https://i.ibb.co/9HrQyz3F/developing-team.jpg"
                        alt="Meeting"
                        className="object-cover w-full h-full"
                    />
                </div>

                <div className="hidden sm:block absolute bottom-8 right-10 sm:right-20 w-16 sm:w-20 h-16 sm:h-20 rounded-xl overflow-hidden">
                    <img
                        src="https://i.ibb.co/gZRBnFvy/front-view-business-people-talking.jpg"
                        alt="Work"
                        className="object-cover w-full h-full"
                    />
                </div>

                {/* Content */}
                <div className="text-center max-w-xl sm:max-w-2xl mx-auto relative z-10">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-snug">
                        New Things Will Always <br className="hidden sm:block" /> Update Regularly
                    </h2>

                    <p className="text-sm sm:text-base opacity-90 mb-6">
                        Subscribe to our newsletter and never miss an update.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center bg-white rounded-full shadow-lg mt-6 overflow-hidden w-full">
                        <div className="flex items-center justify-center w-full sm:w-auto px-4 text-gray-400 py-3 sm:py-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0L12 13.5 2.25 6.75"
                                />
                            </svg>
                        </div>

                        <input
                            type="text"
                            placeholder="Enter your email here"
                            className="flex-1 w-full px-4 py-3 text-gray-700 text-sm sm:text-base outline-none"
                        />

                        <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#38a3a5] text-white font-semibold px-6 py-3 hover:bg-[#2c8587] transition-all">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Subscription;