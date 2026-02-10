import { motion } from "motion/react";
import React from "react";

const Banner = () => {
  return (
    <div
      className="hero w-full mb-10 bg-cover bg-center relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[700px]"
      style={{ backgroundImage: `url('/job-1.jpg')` }}
    >
      <div className="hero-content flex flex-col items-center text-center relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Heading */}
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { duration: 4 } }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 drop-shadow-lg leading-snug"
        >
          Your Next{" "}
          <motion.span
            animate={{
              color: [
                "#f94144",
                "#f3722c",
                "#f9c74f",
                "#90be6d",
                "#43aa8b",
                "#577590",
                "#f94144",
              ],
              transition: { duration: 4, repeat: Infinity },
            }}
          >
            Career
          </motion.span>{" "}
          Move!
        </motion.h1>

        {/* Paragraph */}
        <p className="text-xs font-light sm:text-base md:text-lg lg:text-xl py-4 sm:py-6 text-gray-800 drop-shadow-md max-w-2xl">
          Discover thousands of opportunities from top employers. Build your
          future — start your job search today. Explore endless possibilities.
          Apply, connect, and get hired faster than ever before.
        </p>

        {/* Responsive search input */}
        <div className="w-full max-w-3xl mt-4 sm:mt-6 flex flex-col sm:flex-row shadow-xl rounded-2xl overflow-hidden bg-white">
          <input
            type="text"
            placeholder="Search jobs, companies, or keywords"
            className="flex-1 px-6 py-4 outline-none text-gray-800 text-lg"
          />
          <button className="bg-[#4993FA] text-white px-6 py-4 font-semibold hover:bg-blue-600 transition mt-2 sm:mt-0">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
