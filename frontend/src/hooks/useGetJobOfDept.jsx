import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setDepartments, setJobs, setSelectedDept } from '../redux/deptSlice';

const UseGetJobOFDept = () => {
    const dispatch = useDispatch();
    const {selectedDept} = useSelector(store=>store.departments);
    useEffect(() => { 
        const fetchJob = async () => {
            console.log("getting")
            try { 
                console.log(selectedDept._id);
                const res = await axios.get(`http://localhost:5000/api/v1/jobs/getByDeptId/${selectedDept._id}`);
                console.log(res); // Corrected the console.log usage
              dispatch(setJobs(res?.data));
            } catch (error) {
                console.log(error);
            }
        }
        fetchJob();
    }, [selectedDept,dispatch]); // Added dispatch to dependency array

    return null; // This hook doesn't render anything
};

export default UseGetJobOFDept;
