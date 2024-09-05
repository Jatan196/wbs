import React, { useState } from 'react';
import SearchBar from './searchBar.jsx';
import JobList from './jobList.jsx';
import Navbar from './navbar.jsx';
import { useDispatch, useSelector } from 'react-redux';
import UseGetDepts from '../hooks/useGetDepts.jsx'

const Home = () => {
    console.log("hi");
    const dispatch=useDispatch();
     UseGetDepts();
   const {departments}=useSelector(store=>store.departments)
   

    const handleMarkAsApplied = () => {
        // api for jobs
        // setJobs(jobs.map(job => job.id === jobId ? { ...job, applied: !job.applied } : job));
        // Update the user's profile with the applied job in your backend here
    };

    return (
        <>
            <Navbar />
            <div className='mx-2 my-2 p-2 '>
                <SearchBar />
                <JobList  onMarkAsApplied={handleMarkAsApplied} />
            </div>
        </>
    );
};

export default Home;
