import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setAppliedJobs } from '../redux/userSlice';

const UseGetAppliedJobs = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        const fetchAppliedJobs = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/v1/jobs/getAppliedJobs`, {
                    headers: {
                        'Content-Type': 'application/json'
                    } 
                });
                console.log(res); // Corrected the console.log usage
              dispatch(setAppliedJobs(res?.data));
            } catch (error) {
                console.log(error);
            }
        }
        fetchAppliedJobs();
    }, []); // Added dispatch to dependency array

    return null; // This hook doesn't render anything
};

export default UseGetAppliedJobs;
