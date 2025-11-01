import React, { Suspense, useEffect, useState } from 'react';
import ApplicationStats from './ApplicationStats';
import FilterSortBar from './FilterSortBar';
import ApplicationList from './ApplicationList';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import ApplicationCharts from './ApplicationCharts';
import TopRecruiters from './TopRecruiters';

const MyApplication = () => {
    const [myApply, setMyApply] = useState([]);

    const { user } = useAuth();
    console.log('MyApplication User:', user);

    useEffect(() => {
        if (!user?.email) return;
        axios
            .get(`http://localhost:3000/applications?email=${user.email}`)
            .then((res) => {
                console.log("Fetched applications:", res.data);
                setMyApply(res.data);
            })
            .catch(err => console.error('Error fetching applications:', err));
    }, [user?.email]);

    return (
        <div className="p-6 max-w-7xl mx-auto">
            {/* Top Stats Section (Full Width) */}
            <ApplicationStats myApply={myApply} />

            {/* Two-column layout below stats */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                {/* LEFT SECTION - Main Application Content */}
                <div className="lg:col-span-2">
                    <Suspense fallback={<div>Loading Applications...</div>}>
                        <div className="mt-6">
                            <ApplicationCharts myApply={myApply} />
                        </div>
                        <FilterSortBar />
                        <div className="mt-6">
                            <ApplicationList myApply={myApply} />
                        </div>

                    </Suspense>
                </div>

                {/* RIGHT SECTION - Top Recruiters Sidebar */}
                <div>
                    <TopRecruiters></TopRecruiters>
                </div>
            </div>
        </div>
    );
};

export default MyApplication;