import React from 'react';
import { Link, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';



const JobApply = () => {

  const { id: jobId } = useParams();
  const user = useAuth();
  console.log(jobId, user);

  const handleApplySubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullName.value;
    const phone = form.phone.value;
    const profilePicture = form.profilePicture.value;
    const motivation = form.motivation.value;
    const resume = form.resume.files[0];
    const cloverLetter = form.cloverLetter.files[0];
    const agreed = form.agreed.checked;

    console.log(fullName, phone, profilePicture, motivation, resume, cloverLetter, agreed);

    const applicationData = {
      jobId,
      applicantEmail: user.email,
      fullName,
      phone,
      profilePicture,
      motivation,
      resume,
      cloverLetter,
      agreed
    };

    axios.post('http://localhost:3000/applications', applicationData)
      .then(response => {
        console.log('Application submitted successfully:', response.data);
        if (response.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Application has been submitted",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
      .catch(error => {
        console.error('Error submitting application:', error);
        // Handle error appropriately
      });

    console.log(applicationData);

    form.reset();


    // Handle form submission logic here
  }

  return (

    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-30 pb-20 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl border-t-4 border-[#38a3a5]">
        {/* 🏷️ Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Apply for Your Dream Job
          </h2>
          <p className="text-gray-500 mt-2">
            Fill in all the required details and upload your Resume and CV to complete your application.
          </p>
        </div>

        {/* 🧾 Form */}
        <form onSubmit={handleApplySubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              required
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#38a3a5] outline-none"
            />
          </div>

          {/* Email */}
          {/* <div>
            <label className="block text-sm font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#38a3a5] outline-none"
            />
          </div> */}

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#38a3a5] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Profile Picture <span className="text-red-500"></span>
            </label>
            <input
              type="url"
              name="profilePicture"
              placeholder="Enter your profile picture URL"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#38a3a5] outline-none"
            />
          </div>

          {/* Motivation */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Motivation <span className="text-red-500">*</span>
            </label>
            <textarea
              name="motivation"
              rows="4"
              required
              placeholder="Tell us why you’re a great fit for this role..."
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#38a3a5] outline-none"
            ></textarea>
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Upload Resume (PDF / DOC) <span className="text-red-500"></span>
            </label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"

              className="w-full border border-gray-300 rounded-lg p-2 bg-gray-50"
            />
          </div>

          {/* CV Upload */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Upload Cover Letter (PDF / DOC) <span className="text-red-500"></span>
            </label>
            <input
              type="file"
              name="cloverLetter"
              accept=".pdf,.doc,.docx"

              className="w-full border border-gray-300 rounded-lg p-2 bg-gray-50"
            />
          </div>

          {/* ✅ Terms & Conditions */}
          <div className="flex items-start gap-2 mt-4">
            <input
              type="checkbox"
              name="agreed"
              required
              className="mt-1 h-4 w-4 text-[#38a3a5] focus:ring-[#38a3a5] border-gray-300 rounded"
            />
            <label className="text-sm text-gray-700">
              I have read and agree to the{" "}
              <Link to="/terms" className="text-[#38a3a5] font-semibold hover:underline">
                Terms and Conditions
              </Link>.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#38a3a5] text-white py-2 rounded-lg font-semibold hover:bg-[#1e5556] hover:cursor-pointer transition mt-4"
          >
            Submit Application
          </button>

          {/* 📞 Support Section */}
          <div className="text-center mt-6 text-sm text-gray-600">
            Need our support?{" "}
            <Link
              to="/contact"
              className="text-[#38a3a5] font-semibold hover:underline"
            >
              Contact Us
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;