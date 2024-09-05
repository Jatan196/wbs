import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import deptReducer from './deptSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        departments: deptReducer,
    },
});

export default store;
