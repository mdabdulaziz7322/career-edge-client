import React from 'react';

const FilterSortBar = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-[#f4fdfd] border border-[#d2f0f0] p-4 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
                <select className="select select-bordered border-[#38a3a5]">
                    <option>Status: All</option>
                    <option>Pending</option>
                    <option>Interview</option>
                    <option>Rejected</option>
                </select>
                <input
                    type="text"
                    placeholder="Search job..."
                    className="input input-bordered border-[#38a3a5]"
                />
            </div>
            <div>
                <select className="select select-bordered border-[#38a3a5]">
                    <option>Sort by: Newest</option>
                    <option>Oldest</option>
                    <option>Company</option>
                </select>
            </div>
        </div>
    );
};

export default FilterSortBar;