import React from 'react';
import { Card, CardContent, Typography, Checkbox } from '@mui/material';

const Job = ({ job, link, onMarkAsApplied }) => {
    //  const currJobs =

    return (
        <div className='grid justify-items-center gap-2 mx-6 p-3'>
            <div className='w-1/2 bg-gray-400 p-4 rounded-md shadow-md'>
                <Card>
                    <CardContent>
                        <Typography variant="h6">{job.title}</Typography>
                        <Typography variant="body2">Publish Date: {job.publishDate}</Typography>
                        <Typography variant="body2">End Date: {job.endDate}</Typography>
                        <Typography variant="body2" className="text-sm">
                            Recruitment Link:
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative inline-block text-yellow-500 hover:text-yellow-500 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-yellow-400 before:opacity-50 before:blur-sm before:scale-0 before:transition-transform before:duration-500 hover:before:scale-100">
                                View
                            </a>
                        </Typography>

                        <div className="mt-2">
                            <Checkbox
                                checked={job.applied}
                                onChange={() => onMarkAsApplied(job.id)}
                                inputProps={{ 'aria-label': 'Mark as applied' }}
                            />
                            Mark as Applied
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>


    );
};

export default Job;
