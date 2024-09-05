import React from 'react';
import Job from './job.jsx';
import UseGetJobOFDept from '../hooks/useGetJobOfDept.jsx';
import { useSelector } from 'react-redux';

const JobList = ({ onMarkAsApplied }) => {
    UseGetJobOFDept();
    const { currJobs,selectedDept } = useSelector(store => store.departments);

    return (
        <div className="p-6 bg-gray-100 rounded-md shadow-md">
            {currJobs?.length > 0 ? (
                currJobs.map((job) => (
                    <Job job={job} link={selectedDept.recruitmentLink} onMarkAsApplied={onMarkAsApplied} />
                ))
            ) : (
                <div className="text-center text-gray-500 p-4">
                    <p className="text-xl font-semibold">No current jobs available for this department</p>
                    <p className="text-sm">Please check back later for new job postings.</p>
                </div>
            )}
        </div>
    );
};

export default JobList;
