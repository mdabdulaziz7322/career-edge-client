import React, { Suspense, useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import MyPostedJobList from './MyPostedJobList';

const MyPostedJobs = () => {

    const [myPostedJobs, setMyPostedJobs] = useState([]);

    const { user } = useAuth();

    useEffect(() => {
        axios.get(`http://localhost:3000/jobs?email=${user.email}`)
            .then(res => {
                console.log('Fetched posted jobs:', res.data);
                setMyPostedJobs(res.data);
            })
    }, [user.email]);
    console.log('Logged in user:', user);
    return (
        <div className='mt-25'>
            <div className="text-center mb-10 mt-10 ">
                <h2 className="text-4xl font-bold text-[#154f4e] ">
                 My Posted Jobs
                </h2>
            </div>
            <Suspense fallback={<div>Loading Posted Jobs...</div>}>
                <MyPostedJobList myPostedJobs={myPostedJobs}></MyPostedJobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;