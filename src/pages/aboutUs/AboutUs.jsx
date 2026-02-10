const AboutUs = () => {
    return (
        <div className="min-h-screen bg-[#4993FA] py-25 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mt-5 uppercase">
                        About Career Edge
                    </h1>
                    <p className="text-white/90 mt-3">
                        Empowering job seekers to find the right opportunities
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Who We Are */}
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <h2 className="text-2xl font-bold text-[#4993FA] mb-4">
                            Who We Are
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Career Edge is a modern job finding platform built to connect
                            talented individuals with the right career opportunities. Our
                            mission is to simplify the job search process and help candidates
                            take the next step in their professional journey.
                        </p>

                        <p className="text-gray-700 leading-relaxed mt-4">
                            Built using the MERN stack, Career Edge provides a fast, secure,
                            and user-friendly experience for both job seekers and employers.
                        </p>
                    </div>

                    {/* What We Offer */}
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <h2 className="text-2xl font-bold text-[#4993FA] mb-4">
                            What We Offer
                        </h2>

                        <ul className="space-y-3 text-gray-700">
                            <li>✅ Browse and apply for verified job listings</li>
                            <li>✅ Create and manage professional profiles</li>
                            <li>✅ Get personalized job recommendations</li>
                            <li>✅ Access career tips and interview guidance</li>
                            <li>✅ Stay updated with the latest job market trends</li>
                        </ul>
                    </div>
                </div>

                {/* Company Info & Map */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mt-12">
                    <h2 className="text-2xl font-bold text-[#4993FA] mb-6 text-center">
                        Our Office
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                        {/* Left: Company Details */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-800">
                                Career Edge Pvt. Ltd.
                            </h3>

                            <p className="text-gray-600">
                                📍 <span className="font-medium">Address:</span><br />
                                123 Innovation Street,<br />
                                Tech Park, Berlin, Germany
                            </p>

                            <p className="text-gray-600">
                                📧 <span className="font-medium">Email:</span><br />
                                support@careeredge.com
                            </p>

                            <p className="text-gray-600">
                                📞 <span className="font-medium">Phone:</span><br />
                                +49 30 1234 5678
                            </p>

                            <p className="text-gray-600 pt-2">
                                We’re always happy to hear from you. Reach out to us for partnerships,
                                support, or career-related queries.
                            </p>
                        </div>

                        {/* Right: Map */}
                        <div className="w-full h-64 md:h-72 rounded-xl overflow-hidden shadow-lg border">
                            <iframe
                                title="Office Location"
                                src="https://www.openstreetmap.org/export/embed.html?bbox=13.35%2C52.49%2C13.45%2C52.54&layer=mapnik"
                                className="w-full h-full border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Call To Action */}
                <div className="text-center mt-12">
                    <h2 className="text-2xl font-bold text-white mb-4">
                        Ready to Take the Next Step?
                    </h2>
                    <p className="text-white/90 mb-6">
                        Join Career Edge today and move closer to your dream job.
                    </p>
                    <button className="btn bg-white text-[#4993FA] hover:bg-gray-100 border-none">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
