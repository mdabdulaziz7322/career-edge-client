import React, { useEffect, useRef, useState } from 'react';

const CategoryBrowser = () => {

    const categories = [
        { title: "Content Writer", jobs: 142 },
        { title: "Marketing & Sale", jobs: 1526 },
        { title: "Finance", jobs: 168 },
        { title: "Human Resource", jobs: 165 },
        { title: "Retail & Products", jobs: 563 },
        { title: "Market Research", jobs: 532 },
        { title: "Customer Help", jobs: 185 },
        { title: "Software", jobs: 1856 },
        { title: "Management", jobs: 965 },
        { title: "Security Analyst", jobs: 254 },
    ];

    const [index, setIndex] = useState(0);
    const touchStart = useRef(null);
    const dragging = useRef(false);
    const startX = useRef(0);
    const positionRef = useRef(0);

    // -------- INFINITE LOOPING --------
    const next = () => setIndex((prev) => (prev + 1) % categories.length);
    const prev = () =>
        setIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));

    // -------- AUTO SLIDE (Mobile only) --------
    useEffect(() => {
        const timer = setInterval(() => {
            if (window.innerWidth < 768) next();
        }, 2500);
        return () => clearInterval(timer);
    }, []);

    // ---------- SWIPE SUPPORT ----------
    const handleTouchStart = (e) => {
        touchStart.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        const end = e.changedTouches[0].clientX;
        const diff = touchStart.current - end;

        if (diff > 50) next();
        if (diff < -50) prev();
    };

    // ---------- DRAG SUPPORT (Tinder Style) ----------
    const handleMouseDown = (e) => {
        dragging.current = true;
        startX.current = e.clientX;
    };

    const handleMouseMove = (e) => {
        if (!dragging.current) return;
        positionRef.current = e.clientX - startX.current;
    };

    const handleMouseUp = () => {
        if (!dragging.current) return;
        dragging.current = false;

        if (positionRef.current < -80) next();
        if (positionRef.current > 80) prev();

        positionRef.current = 0;
    };

    const icons = {
        "Content Writer": (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24">
                <path d="M7 7h10M7 11h6M7 15h4" stroke="currentColor" strokeWidth="1.5" />
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" />
            </svg>
        ),
        "Marketing & Sale": (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24">
                <path d="M3 11v2a2 2 0 0 0 2 2h2l7 4V5L7 9H5a2 2 0 0 0-2 2z" stroke="currentColor" />
            </svg>
        ),
        Finance: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24">
                <path d="M12 3v18M8 7h8M6 17h12" stroke="currentColor" />
            </svg>
        ),
        "Human Resource": (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="9" r="3" stroke="currentColor" />
                <path d="M5.5 20a6.5 6.5 0 0 1 13 0" stroke="currentColor" />
            </svg>
        ),
        Software: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" />
                <path d="M8 9h8M8 13h8" stroke="currentColor" />
            </svg>
        ),
    };

    const ArrowLeft = () => (
        <svg className="w-6 h-6 text-gray-400 hover:text-blue-600 transition hidden md:block" fill="none" viewBox="0 0 24 24">
            <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" />
        </svg>
    );

    const ArrowRight = () => (
        <svg className="w-6 h-6 text-gray-400 hover:text-blue-600 transition hidden md:block" fill="none" viewBox="0 0 24 24">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" />
        </svg>
    );




    return (
        <section className="px-5 py-12 select-none max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center uppercase">Browse by category</h2>
            <p className="text-center text-gray-500 mt-2">
                Find the job that's perfect for you. About 800+ new jobs everyday
            </p>

            {/* -------- MOBILE SLIDER -------- */}
            <div
                className="md:hidden mt-10 px-4 transition-all duration-300 ease-in-out"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
            >
                <div className="flex justify-center">
                    <div
                        className="w-full p-5 border border-gray-200 rounded-xl flex items-center gap-5 bg-white  transition-all duration-500"
                        style={{
                            transform: `translateX(${positionRef.current}px)`,
                        }}
                    >
                        <div className="w-14 h-14 flex items-center justify-center bg-indigo-50 rounded-xl text-indigo-600">
                            {icons[categories[index].title] || icons["Content Writer"]}
                        </div>

                        <div>
                            <h3 className="font-semibold">{categories[index].title}</h3>
                            <p className="text-sm text-gray-500">{categories[index].jobs} Jobs Available</p>
                        </div>
                    </div>
                </div>

                {/* Dots */}
                <div className="flex justify-center mt-4 gap-2">
                    {categories.map((_, i) => (
                        <div
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === i ? "bg-blue-600 scale-125" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* -------- DESKTOP GRID -------- */}
            <div className='flex flex-row justify-between items-center gap-2 mt-10'>
                <div className=' bg-indigo-50 rounded-full p-1'>
                    <ArrowLeft />
                </div>
                <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-5  max-w-6xl mx-auto px-2">
                    {categories.map((item, i) => (
                        <div
                            key={i}
                            className=" p-3 rounded-xl border border-gray-200 group hover:shadow-lg transition bg-white cursor-pointer"
                        >

                            <div className="flex items-center gap-4 flex-1 justify-center">
                                <div className="w-8 h-8 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                                    {icons[item.title] || icons["Content Writer"]}
                                </div>
                                <div>
                                    <h3 className=" text-xs font-bold">{item.title}</h3>
                                    <p className="text-xs text-gray-500">{item.jobs} Jobs Available</p>
                                </div>
                            </div>


                        </div>
                    ))}
                </div>
                <div className=' bg-indigo-50 rounded-full p-1'>
                    <ArrowRight />
                </div>
            </div>
        </section>
    );
};

export default CategoryBrowser;