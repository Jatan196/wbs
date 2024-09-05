import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setAppliedJobs } from '../redux/userSlice';
import { Link } from 'react-router-dom';
import UseGetAppliedJobs from '../hooks/useGetAppliedJobs';

const Profile = () => {
    const dispatch = useDispatch();
    const {userDetails} = useSelector((state) => state.user);
    
     UseGetAppliedJobs();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                <h1 className="text-3xl font-bold text-center text-blue-500 mb-6">Profile</h1>

                <div className="mb-4">
                    <h2 className="text-xl font-semibold text-gray-700">Full Name:</h2>
                    <p className="text-gray-600">{userDetails?.fullName}</p>
                </div>

                <div className="mb-4">
                    <h2 className="text-xl font-semibold text-gray-700">Email:</h2>
                    <p className="text-gray-600">{userDetails?.email}</p>
                </div>

                <div className="mb-4">
                    <h2 className="text-xl font-semibold text-gray-700">Applied Jobs:</h2>
                    {/* {userDetails.appliedJobs.length > 0 ? (
                        <ul className="list-disc list-inside text-gray-600">
                            {profile.appliedJobs.map((jobId) => (
                                <li key={jobId}>
                                    <Link to={`/jobs/${jobId}`} className="text-pink-500 underline">View Job</Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-600">No jobs applied yet.</p>
                    )} */}
                </div>
            </div>
        </div>
    );
};

export default Profile;
