import React from 'react';
import Job from './job.jsx';

const JobList = ({ jobs, onMarkAsApplied }) => {
    return (
        <div>
            {jobs.map((job) => (
                <Job key={job.id} job={job} onMarkAsApplied={onMarkAsApplied} />
            ))}
        </div>
    );
};

export default JobList;
