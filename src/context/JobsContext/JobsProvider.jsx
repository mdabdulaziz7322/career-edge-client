import React, { createContext, useEffect, useState } from 'react';

export const JobsContext = createContext();

 const JobsProvider = ({ children }) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3000/jobs")
            .then((res) => res.json())
            .then((data) => {
                setJobs(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching jobs:", err);
                setLoading(false);
            });
    }, []);

    return (
        <JobsContext.Provider value={{ jobs, loading }}>
            {children}
        </JobsContext.Provider>
    );
};

export default JobsProvider;

