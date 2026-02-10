import React from 'react';
import MyJobsCard from './MyJobsCard';

const MyPostedJobList = ({myPostedJobs}) => {
    const myJobs = myPostedJobs
    console.log(myJobs)
    
   
    return (
        <div>
            <div className=''>
               {
                myJobs.map((job) => <MyJobsCard key={myJobs._id} job= {job}></MyJobsCard> )
               }
            </div>
        </div>
    );
};

export default MyPostedJobList;