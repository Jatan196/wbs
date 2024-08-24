import React, { useState } from 'react';
import SearchBar from './searchBar.jsx';
import JobList from './jobList.jsx';

const Home = () => {
    const [selectedMinistry, setSelectedMinistry] = useState(null);
    const [jobs, setJobs] = useState([]);

    const ministries = [
        { name: 'Ministry 1', id: 1 },
        { name: 'Ministry 2', id: 2 },
        // Add more ministries here
    ];

    const handleSearch = () => {
        // Logic to fetch jobs based on selected ministry
        // For now, we'll use dummy data
        const fetchedJobs = [
            { id: 1, title: 'Job 1', publishDate: '2024-08-01', endDate: '2024-09-01', recruitmentLink: '#', applied: false },
            { id: 2, title: 'Job 2', publishDate: '2024-08-05', endDate: '2024-09-05', recruitmentLink: '#', applied: false },
        ];
        setJobs(fetchedJobs);
    };

    const handleMarkAsApplied = (jobId) => {
        setJobs(jobs.map(job => job.id === jobId ? { ...job, applied: !job.applied } : job));
        // Update the user's profile with the applied job in your backend here
    };

    return (
        <navbar/>
        <div className='mx-2 my-2 p-2 bg-purple-400'>
            <SearchBar 
                ministries={ministries}
                selectedMinistry={selectedMinistry}
                setSelectedMinistry={setSelectedMinistry}
                onSearch={handleSearch}
            />
            <JobList jobs={jobs} onMarkAsApplied={handleMarkAsApplied} />
        </div>
    );
};

export default Home;
