import React from 'react';
import ApplicationCard from './ApplicationCard';

const ApplicationList = ({ myApply }) => {

    const myApplications = myApply;
    console.log('ApplicationList myApplications:', myApplications);



    return (
        <div>
            
            <div className="p-4 rounded-xl shadow-md bg-[#f4fdfd]">

            {myApplications.length === 0 ? (
                <p className="text-gray-500">You haven’t applied for any jobs yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {myApplications.map((app) => (
                        <ApplicationCard key={app.id} app={app} />
                    ))}
                </div>
            )}
        </div>
        </div>
    );
};

export default ApplicationList;