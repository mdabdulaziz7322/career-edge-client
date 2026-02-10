import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const categories = [
    { id: 1, name: "Engineering" },
    { id: 2, name: "Marketing" },
    { id: 3, name: "Management" },
    { id: 4, name: "Finance" },
    { id: 5, name: "Sales" },
    { id: 6, name: "Design" },
    { id: 7, name: "Human Resources" },
    { id: 8, name: "Customer Support" },
    { id: 9, name: "IT & Software" },
    { id: 10, name: "Education" },
];

const jobTypes = ["On-site", "Remote", "Hybrid"];

const AddJobs = () => {

    const { user } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const jobData = Object.fromEntries(formData.entries());
        console.log(jobData);

        const category_id = parseInt(jobData.category_id);
        const category = categories.find(cat => cat.id === category_id)?.name || "";
        jobData.category_id = category_id;
        jobData.category = category;

        jobData.requirements = jobData.requirements.split(',').map(req => req.trim());
        jobData.responsibilities = jobData.responsibilities.split(',').map(res => res.trim());

        jobData.Min = Number(jobData.Min);
        jobData.Max = Number(jobData.Max);

        const { Min, Max, currency, ...newJobData } = jobData;
        newJobData.salaryRange = { min: Min, max: Max, currency: currency };
        newJobData.status = "Active";

        console.log(newJobData);

        axios.post('http://localhost:3000/jobs', newJobData)
            .then(response => {
                console.log('Job added successfully:', response.data);
                if (response.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Job Added Successfully ",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                form.reset();
            })
            .catch(error => {
                console.error('Error adding job:', error);
                alert('Failed to add job. Please try again.');
            });




        // Handle form submission logic here
    }
    return (
        <div className="min-h-screen bg-[#F4F7FF] items-center justify-center py-12 px-6">
            <div className="max-w-5xl w-full mx-auto mt-20 bg-white rounded-3xl shadow-lg p-10 border-t-8 border-[#4993FA]">
                {/* Header */}
                <h2 className="text-4xl font-bold text-center mb-10">
                    <span className="text-gray-800">Add a </span>
                    <span className="text-[#4993FA]">New Job</span>
                </h2>

                <form onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10"
                >
                    {/* Left Column */}
                    <div className="space-y-6">
                        <input
                            name="title"
                            placeholder="Job Title"
                            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-4 focus:ring-[#4993FA] focus:border-[#4993FA] outline-none transition-all"
                            required
                        />

                        <input
                            name="location"
                            placeholder="Location"
                            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-4 focus:ring-[#4993FA] focus:border-[#4993FA] outline-none transition-all"
                            required
                        />

                        <select
                            name="jobType"
                            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-4 focus:ring-[#4993FA] focus:border-[#4993FA] outline-none transition-all"
                            required
                        >
                            <option value="">Select Job Type</option>
                            {jobTypes.map((type) => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>

                        <select
                            name="category_id"
                            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-4 focus:ring-[#4993FA] focus:border-[#4993FA] outline-none transition-all"
                            required
                        >
                            <option value="">Select Job Category</option>
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.id}>
                                    {cat.name}
                                </option>
                            ))}
                        </select>

                        <input
                            type="date"
                            name="applicationDeadline"
                            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-4 focus:ring-[#4993FA] focus:border-[#4993FA]"
                            required
                        />

                        <div className="flex gap-4">
                            <input
                                name="Min"
                                type="number"
                                placeholder="Min Salary"
                                className="w-1/2 p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-4 focus:ring-[#4993FA] outline-none"
                                required
                            />
                            <input
                                name="Max"
                                type="number"
                                placeholder="Max Salary"
                                className="w-1/2 p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-4 focus:ring-[#4993FA] outline-none"
                                required
                            />
                        </div>

                        <select
                            name="currency"
                            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-4 focus:ring-[#4993FA]"
                        >
                            <option value="bdt">BDT</option>
                            <option value="usd">USD</option>
                            <option value="eur">EUR</option>
                        </select>

                        <textarea
                            name="description"
                            placeholder="Job Description"
                            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm h-32 focus:ring-4 focus:ring-[#4993FA] outline-none transition-all"
                            required
                        />
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">

                        <select name="status" className=" w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-4 focus:ring-[#4993FA] outline-none" required>
                            <option value="">Select Status</option>
                            <option value="active">Active</option>
                            <option value="closed">Closed</option>
                        </select>

                        <input
                            name="company"
                            placeholder="Company Name"
                            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-4 focus:ring-[#4993FA] outline-none"
                            required
                        />

                        <textarea
                            name="requirements"
                            placeholder="Requirements (comma separated)"
                            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm h-32 focus:ring-4 focus:ring-[#4993FA] outline-none"
                            required
                        />

                        <textarea
                            name="responsibilities"
                            placeholder="Responsibilities (comma separated)"
                            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm h-32 focus:ring-4 focus:ring-[#4993FA] outline-none"
                            required
                        />

                        <input
                            name="hr_name"
                            placeholder="HR Name"
                            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-4 focus:ring-[#4993FA] outline-none"
                            required
                        />

                        <input
                            name="hr_email"
                            type="email"
                            defaultValue={user?.email}
                            placeholder="HR Email"
                            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-4 focus:ring-[#4993FA] outline-none"
                            required
                        />

                        <input
                            name="company_logo"
                            placeholder="Company Logo URL"
                            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-4 focus:ring-[#4993FA] outline-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="col-span-1 md:col-span-2 flex justify-center mt-10">
                        <button
                            type="submit"
                            className="bg-[#4993FA] text-white px-14 py-3 rounded-2xl font-semibold shadow-lg hover:bg-[#4993FA] hover:scale-105 transition-transform duration-300"
                        >
                            <span className='text-white'>➕</span> Add Job
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJobs;