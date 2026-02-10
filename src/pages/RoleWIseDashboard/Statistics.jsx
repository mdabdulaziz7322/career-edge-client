import React from 'react';
import {
    BarChart3,
    Building,
    Lightbulb,
    Headphones,
    Search,
    Mail,
    ClipboardList,
    User,
    ArrowUpRight,
    ArrowDownRight,
} from "lucide-react";
import ApplicationCharts from '../myApplication/ApplicationCharts';
import Subscription from '../Shared/Subscription';

const Statistics = () => {
    return (
        <div>
            <div className="p-5  min-h-screen ml-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    Dashboard Overview
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl shadow-sm p-6">
                        <div className="flex justify-between items-center">
                            <BarChart3 size={28} className="text-[#4993FA]" />
                            <div className="flex items-center gap-1 text-sm text-green-600 font-medium">
                                <ArrowUpRight size={16} /> +25%
                            </div>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mt-4">1568</h3>
                        <p className="text-gray-500 mt-1">Interview Schedules</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl shadow-sm p-6">
                        <div className="flex justify-between items-center">
                            <Building size={28} className="text-[#4993FA]" />
                            <div className="flex items-center gap-1 text-sm text-green-600 font-medium">
                                <ArrowUpRight size={16} /> +5%
                            </div>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mt-4">284</h3>
                        <p className="text-gray-500 mt-1">Applied Jobs</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl shadow-sm p-6">
                        <div className="flex justify-between items-center">
                            <Lightbulb size={28} className="text-[#4993FA]" />
                            <div className="flex items-center gap-1 text-sm text-green-600 font-medium">
                                <ArrowUpRight size={16} /> +12%
                            </div>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mt-4">136</h3>
                        <p className="text-gray-500 mt-1">Task Bids Won</p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white rounded-2xl shadow-sm p-6">
                        <div className="flex justify-between items-center">
                            <Headphones size={28} className="text-[#4993FA]" />
                            <div className="flex items-center gap-1 text-sm text-green-600 font-medium">
                                <ArrowUpRight size={16} /> +5%
                            </div>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mt-4">985</h3>
                        <p className="text-gray-500 mt-1">Application Sent</p>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-white rounded-2xl shadow-sm p-6">
                        <div className="flex justify-between items-center">
                            <Search size={28} className="text-[#4993FA]" />
                            <div className="flex items-center gap-1 text-sm text-green-600 font-medium">
                                <ArrowUpRight size={16} /> +15%
                            </div>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mt-4">165</h3>
                        <p className="text-gray-500 mt-1">Profile Viewed</p>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-white rounded-2xl shadow-sm p-6">
                        <div className="flex justify-between items-center">
                            <Mail size={28} className="text-[#4993FA]" />
                            <div className="flex items-center gap-1 text-sm text-red-500 font-medium">
                                <ArrowDownRight size={16} /> -2%
                            </div>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mt-4">2356</h3>
                        <p className="text-gray-500 mt-1">New Messages</p>
                    </div>

                    {/* Card 7 */}
                    <div className="bg-white rounded-2xl shadow-sm p-6">
                        <div className="flex justify-between items-center">
                            <ClipboardList size={28} className="text-[#4993FA]" />
                            <div className="flex items-center gap-1 text-sm text-green-600 font-medium">
                                <ArrowUpRight size={16} /> +2%
                            </div>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mt-4">254</h3>
                        <p className="text-gray-500 mt-1">Articles Added</p>
                    </div>

                    {/* Card 8 */}
                    <div className="bg-white rounded-2xl shadow-sm p-6">
                        <div className="flex justify-between items-center">
                            <User size={28} className="text-[#4993FA]" />
                            <div className="flex items-center gap-1 text-sm text-green-600 font-medium">
                                <ArrowUpRight size={16} /> +48%
                            </div>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mt-4">548</h3>
                        <p className="text-gray-500 mt-1">CV Added</p>
                    </div>
                </div>
                <div className='mt-10'>
                    <ApplicationCharts></ApplicationCharts>
                </div>
                <Subscription></Subscription>
            </div>
        </div>
    );
};

export default Statistics;