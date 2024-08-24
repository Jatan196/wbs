import React from 'react';
import { Card, CardContent, Typography, Checkbox } from '@mui/material';

const Job = ({ job, onMarkAsApplied }) => {
    return (
        <Card style={{ marginBottom: '10px' }}>
            <CardContent>
                <Typography variant="h6">{job.title}</Typography>
                <Typography variant="body2">Publish Date: {job.publishDate}</Typography>
                <Typography variant="body2">End Date: {job.endDate}</Typography>
                <Typography variant="body2">Recruitment Link: <a href={job.recruitmentLink} target="_blank" rel="noopener noreferrer">View</a></Typography>
                <Checkbox
                    checked={job.applied}
                    onChange={() => onMarkAsApplied(job.id)}
                    inputProps={{ 'aria-label': 'Mark as applied' }}
                />
                Mark as Applied
            </CardContent>
        </Card>
    );
};

export default Job;
