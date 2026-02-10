import React from 'react';

import HiringLottie from '../../assets/Lotties/Connect with us.json'
import MegaPhone from '../../assets/Lotties/Megaphone Announcement.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router';


const HiringBanner = () => {
    return (
        <section className="bg-white border border-blue-200 rounded-sm shadow  max-w-4xl mx-auto ">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 px-10">

                <div>
                    <Lottie style={{ width: '150px' }} animationData={MegaPhone} loop={true}></Lottie>
                </div>

                <div className='flex flex-col md:flex-row  gap-5 items-center justify-center'>
                    <div>
                        <h2 className="text-3xl font-bold mt-6">
                        WE ARE <span className="text-blue-600">HIRING</span>
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Let’s Work Together & Explore Opportunities
                    </p>
                    </div>

                    <Link to= 'all-jobs'>
                    <button className=" bg-[#4993FA] text-white px-8 py-2 text-sm rounded-lg hover:bg-blue-700 cursor-pointer transition">
                        Apply
                    </button></Link>
                </div>

                <div>
                    <Lottie style={{ width: '150px' }} animationData={HiringLottie} loop={true}></Lottie>
                </div>
            </div>
        </section>
    );
};

export default HiringBanner;