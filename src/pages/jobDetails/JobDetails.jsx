import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaBriefcase, FaMoneyBillWave, FaClock, FaBuilding } from "react-icons/fa";
import Subscription from '../Shared/Subscription';

const JobDetails = () => {

    const jobs = useLoaderData();
    const { title, company, _id, location, hr_email, applicationDeadline, company_logo, jobType, status, responsibilities } = jobs;
    return (
        <div className="min-h-screen bg-gray-50 mx-auto">
            {/* 🖼️ Banner Image */}
            <div className="w-full h-50 md:h-80 lg:h-100">
                <img
                    src="https://i.ibb.co/nF3vQyX/front-view-business-people-talking.jpg"
                    alt="Job Banner"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* 🧭 Company Header */}
            <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <img
                        src={company_logo}
                        alt={company}
                        className="w-20 h-20 rounded-xl object-contain border"
                    />
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">{company}</h2>
                        <p className="text-gray-500 text-sm">Transforming possibilities into reality</p>
                        <p className="text-gray-500 text-sm">Job Type: {jobType}</p>
                    </div>
                </div>
                <Link
                    to={`/job-apply/${_id}`}>
                    <button className="btn bg-[#38a3a5] rounded-lg text-white px-10 py-2 border-none">
                        Apply Now
                    </button>
                </Link>
            </div>

            <hr className="border-gray-200" />

            {/* 🧱 Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-5 grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* 📝 Left Side (2/3 width) */}
                <div className="lg:col-span-2 space-y-8">
                    {/* About Company */}
                    <section>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                            Welcome to {company} Team
                        </h3>
                        <p className="text-gray-600 leading-relaxed">Our company is a forward-thinking organization dedicated to empowering individuals and businesses through innovative solutions and exceptional service. We pride ourselves on fostering a culture of creativity, collaboration, and integrity — where ideas thrive and results speak for themselves. With a strong focus on customer satisfaction, we continuously evolve to meet the changing needs of our clients and the industries we serve.</p>
                        <p className="text-gray-600 leading-relaxed">Backed by a passionate team of professionals and cutting-edge technology, we aim to drive growth, create opportunities, and build lasting relationships. Whether through delivering world-class products, connecting talent with opportunity, or providing strategic support, our mission remains the same — to make a positive impact and help our clients and partners achieve success in an ever-evolving global marketplace.</p>
                    </section>

                    {/* Essential Skills */}
                    <section>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                            Essential Knowledge, Skills
                        </h3>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                            {responsibilities.map((res, index) => (
                                <li key={index}>{res}</li>  
                            ))}
                            <li>Communication (verbal & written)</li>
                            <li>Teamwork & collaboration</li>
                            <li>Problem-solving</li>
                            <li>Time management</li>
                            <li>Work ethic & reliability</li>
                        </ul>
                        <h3 className="text-xl font-bold text-gray-800 mb-3 mt-5">
                            Hard Skills (Technical & Job-Specific)
                        </h3>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                            <li>Microsoft Office (Word, Excel, PowerPoint)</li>
                            <li>Google Workspace (Docs, Sheets, Slides)</li>
                            <li>Computer literacy & typing</li>
                            <li>Project management</li>
                        </ul>
                    </section>
                </div>

                {/* 📍 Right Side (1/3 width) */}
                <div className="space-y-3">
                   
                    {/* Company Info */}
                    <div className="bg-white rounded-xl shadow-md p-5 space-y-4">
                        <div className="h-48 rounded-xl overflow-hidden shadow-md">
                        <iframe
                            title="Company Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.9479180715284!2d-87.6297993846952!3d41.87811397922132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca4182e0199%3A0xdee0f0a1e1f7b5b0!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1674169169263!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>

                    </div>

                        <div className="flex items-center gap-3 text-gray-700">
                            <FaBuilding className="text-[#38a3a5]" />
                            <div>
                                <p className="text-sm text-gray-500">Company Field</p>
                                <p className="font-semibold">{title}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 text-gray-700">
                            <FaMapMarkerAlt className="text-[#38a3a5]" />
                            <div>
                                <p className="text-sm text-gray-500">Location</p>
                                <p className="font-semibold">{location}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 text-gray-700">
                            <FaMoneyBillWave className="text-[#38a3a5]" />
                            <div>
                                <p className="text-sm text-gray-500">Salary</p>
                                <p className="font-semibold">14 Euro/Hour</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 text-gray-700">
                            <FaClock className="text-[#38a3a5]" />
                            <div>
                                <p className="text-sm text-gray-500">applicationDeadline</p>
                                <p className="font-semibold">{applicationDeadline}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 text-gray-700">
                            <FaBriefcase className="text-[#38a3a5]" />
                            <div>
                                <p className="text-sm text-gray-500">Status</p>
                                <p className="font-semibold">{status}</p>
                            </div>
                        </div>

                        <hr className="border-gray-200" />

                        <h4 className="text-lg font-semibold text-gray-800">
                            Contact Information
                        </h4>

                        <div className="flex items-center gap-3 text-gray-700">
                            <FaMapMarkerAlt className="text-[#38a3a5]" />
                            <p className="text-sm">{location}</p>
                        </div>

                        <div className="flex items-center gap-3 text-gray-700">
                            <FaPhoneAlt className="text-[#38a3a5]" />
                            <p className="text-sm">(+49)171635598</p>
                        </div>

                        <div className="flex items-center gap-3 text-gray-700">
                            <FaEnvelope className="text-[#38a3a5]" />
                            <p className="text-sm">{hr_email}</p>
                        </div>

                        <button className="w-full mt-2 bg-[#38a3a5] text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition">
                            Send Message
                        </button>
                    </div>

                </div>
            </div>
            <Subscription></Subscription>
        </div>

    );
};

export default JobDetails;