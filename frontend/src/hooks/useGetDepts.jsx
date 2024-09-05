import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setDepartments } from '../redux/deptSlice';

const UseGetDepts = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        const fetchDept = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/v1/jobs/getDepts`, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                console.log(res); // Corrected the console.log usage
              dispatch(setDepartments(res?.data));
            } catch (error) {
                console.log(error);
            }
        }
        fetchDept();
    }, []); // Added dispatch to dependency array

    return null; // This hook doesn't render anything
};

export default UseGetDepts;
