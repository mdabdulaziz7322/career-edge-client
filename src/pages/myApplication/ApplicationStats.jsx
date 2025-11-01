import React from 'react';

const ApplicationStats = ({myApply}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-15 mt-20 ">
            
                <div
                    className={`p-6 rounded-2xl shadow-md text-white bg-[#38a3a5] hover:scale-105 transition-transform duration-300`}
                >
                    <h3 className="text-lg font-medium">Total Applications</h3>
                    <p className="text-3xl font-bold mt-2">{myApply.length}</p>
                </div>
                <div
                    className={`p-6 rounded-2xl shadow-md text-white bg-yellow-400 hover:scale-105 transition-transform duration-300`}
                >
                    <h3 className="text-lg font-medium">Pending</h3>
                    <p className="text-3xl font-bold mt-2">-</p>
                </div>
                <div
                    className={`p-6 rounded-2xl shadow-md text-white bg-blue-500 hover:scale-105 transition-transform duration-300`}
                >
                    <h3 className="text-lg font-medium">Interview</h3>
                    <p className="text-3xl font-bold mt-2">-</p>
                </div>
                <div
                    className={`p-6 rounded-2xl shadow-md text-white bg-red-400 hover:scale-105 transition-transform duration-300`}
                >
                    <h3 className="text-lg font-medium">Rejected</h3>
                    <p className="text-3xl font-bold mt-2">-</p>
                </div>
            
        </div>
    );
};

export default ApplicationStats;