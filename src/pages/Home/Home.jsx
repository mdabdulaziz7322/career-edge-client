
import React, { useState } from 'react';
import Banner from './Banner';
import HotJob from './HotJob';
import { useEffect } from 'react';
import axios from 'axios';

const Home = () => {

    const [hotJobs, setHotJobs] = useState([]);

    useEffect(() => {
    axios.get('http://localhost:3000/jobs/category/1')
      .then(res => setHotJobs(res.data))
      .catch(err => console.error(err));
  }, []);
    
    return (
        <div className=''>
            <Banner></Banner>
            <HotJob hotJobs= {hotJobs} ></HotJob>
        </div>
    );
};

export default Home;