import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedDept:null, // it will store curr dept info and all jobs provided by that dept
    currJobs:[],
    departments: [], // This will store an array of department objects
};

const deptSlice = createSlice({
    name: 'departments',
    initialState,
    reducers: {
        setDepartments(state, action) {
            state.departments = action.payload;
        },
        setSelectedDept(state, action) {
            state.selectedDept = action.payload;
        },
        setJobs(state, action) {
            state.currJobs = action.payload;
        }
    },
});

export const { setDepartments, setSelectedDept,setJobs } = deptSlice.actions;

export default deptSlice.reducer;
