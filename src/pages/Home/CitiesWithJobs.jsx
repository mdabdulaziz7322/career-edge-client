const CitiesWithJobs = () => {
    const cities = [
        {
            id: 1,
            name: "Berlin",
            jobs: 1240,
            image:
                "/images/photo-1542010589005-d1eacc3918f2.avif",
        },
        {
            id: 2,
            name: "Munich",
            jobs: 980,
            image:
                "/images/munic.avif",
        },
        {
            id: 3,
            name: "Hamburg",
            jobs: 860,
            image:
                "/images/hamburg.avif",
        },
        {
            id: 4,
            name: "Frankfurt",
            jobs: 740,
            image:
                "/images//frankfurt.jpg",
        },
        {
            id: 5,
            name: "Cologne",
            jobs: 620,
            image:
                "/images/cologne.avif",
        },
        {
            id: 6,
            name: "Stuttgart",
            jobs: 540,
            image:
                "/images/stuttgart.jpg",
        },
        {
            id: 7,
            name: "Düsseldorf",
            jobs: 480,
            image:
                "/images/dusseldorf.jpg",
        },
        {
            id: 8,
            name: "Leipzig",
            jobs: 390,
            image:
                "/images/leipzig.avif",
        },
    ];



    return (
        <div className="py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold uppercase ">
                        Jobs by City
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Explore opportunities across top cities in Germany
                    </p>
                </div>

                {/* Cities Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {cities.map((city) => (
                        <div
                            key={city.id}
                            className="relative group rounded-2xl overflow-hidden shadow-lg h-48 cursor-pointer"
                        >
                            {/* City Image */}
                            <img
                                src={city.image}
                                alt={city.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />

                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                            {/* Text Overlay */}
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h3 className="text-xl font-bold">
                                    {city.name}
                                </h3>
                                <p className="text-sm mt-1">
                                    💼 {city.jobs} Jobs Available
                                </p>
                            </div>

                            {/* Hover Border Accent */}
                            <div className="absolute inset-0 border-2 border-transparent  rounded-2xl transition-all duration-300"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CitiesWithJobs;
