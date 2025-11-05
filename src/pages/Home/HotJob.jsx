
import { Link } from "react-router";
import HotJobCard from "./HotJobCard";
import Subscription from "../Shared/Subscription";


const HotJob = ({ hotJobs }) => {

    const sampleJobs = hotJobs;
    console.log(sampleJobs);

    return (
        <div className=" mx-auto px-4 sm:px-6 lg:px-12 my-10">
            <div className="text-center my-8">
                <div className="divider"></div>
                <h2 className="text-3xl font-semibold text-[#154f4e]">Jobs of the day</h2>
                <p className=" text-[#154f4e]">Search and connect with the right candidates faster.</p>
                <div className="divider"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {
                    sampleJobs.map(sampleJob => <HotJobCard key={sampleJob._id} sampleJob={sampleJob} ></HotJobCard>)
                }
            </div>
            <div className="">
                <Subscription></Subscription>
            </div>
        </div>
    );
};

export default HotJob;