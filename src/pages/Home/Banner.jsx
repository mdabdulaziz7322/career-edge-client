import { motion } from "motion/react"
import React from 'react';
import pic1 from '../../assets/pics/celebrating.jpg'

import pic2 from '../../assets/pics/developing team.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-96 mb-10">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="flex-1">
        <motion.img
      src={pic2}
      animate={{ y: [100, 150, 100] }}
      transition={{ duration: 5, repeat: Infinity }}
      className="max-w-sm rounded-t-[60px] rounded-br-[50px] border-s-10 border-b-10 border-[#38a3a5]  shadow-2xl "
    />
        <motion.img
      src={pic1}
      animate={{ x: [100, 150, 100] }}
      transition={{ duration: 10, delay:2, repeat: Infinity }}
      className="max-w-sm rounded-t-[60px] rounded-br-[50px] border-s-10 border-b-10 border-[#38a3a5]  shadow-2xl "
    />
    </div>
    <div className="flex-1 mt-10">
      <motion.h1
      initial= {{scale:0}}
      animate= {{scale:1, transition: { duration: 4}}}
      className="text-5xl font-bold">Your Next <motion.span
      animate= {
        {color: ['#f94144', '#f3722c', '#f9c74f', '#90be6d', '#43aa8b', '#577590', '#f94144'],
            transition: { duration: 4, repeat: Infinity }
        }}
      >Career</motion.span> Move!</motion.h1>
      <p className="py-6">
        Discover thousands of opportunities from top employers. Build your future — start your job search today.Explore endless possibilities. Apply, connect, and get hired faster than ever before.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;