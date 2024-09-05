import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userDetails: null, // You can populate this with user information like name, email, etc.
    appliedJobs: [],   // This will store the list of job IDs that the user has applied to
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserDetails(state, action) {
            state.userDetails = action.payload;
        },
        applyJob(state, action) {
            state.appliedJobs.push(action.payload);
        },
    },
});

export const { setUserDetails, setAppliedJobs } = userSlice.actions;

export default userSlice.reducer;
