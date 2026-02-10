
import React, { useState } from 'react';
import Banner from './Banner';
import HotJob from './HotJob';
import { useEffect } from 'react';
import axios from 'axios';
import CategoryBrowser from './CategoryBrowser';
import HiringBanner from './HiringBanner';
import SearchJobBanner from './SearchJobBanner';
import CitiesWithJobs from './CitiesWithJobs';
import Subscription from '../Shared/Subscription';

const Home = () => {

    const [hotJobs, setHotJobs] = useState([]);

    useEffect(() => {
    axios.get('http://localhost:3000/jobs/category/1')
      .then(res => setHotJobs(res.data))
      .catch(err => console.error(err));
  }, []);
    
    return (
        <div >
            <Banner></Banner>
            <CategoryBrowser></CategoryBrowser>
            <HiringBanner></HiringBanner>
            <CitiesWithJobs></CitiesWithJobs>
            <div className='max-w-7xl mx-auto'>
                <HotJob hotJobs= {hotJobs} ></HotJob>
            </div>
            <SearchJobBanner></SearchJobBanner>
            <Subscription></Subscription>
            
        </div>
    );
};

export default Home;