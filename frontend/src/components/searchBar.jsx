import React, { useState } from 'react';
import { TextField, Autocomplete, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

import { setSelectedDept } from '../redux/deptSlice';
import UseGetJobOFDept from '../hooks/useGetJobOfDept';

const SearchBar = () => {

    const dispatch = useDispatch();
    const { departments } = useSelector(store => store.departments);
    const [currOptn, setCurrOptn] = useState();
    console.log(currOptn);
    const option = {
        "name": "Type..."
    }
    const onSearch = () => {
        console.log("arfsd")
        dispatch(setSelectedDept(currOptn));
    }
    return (
        <>

            <div className='bg-purple-400 p-2' style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Autocomplete
                    value={currOptn}
                    onChange={(event, newValue) => setCurrOptn(newValue)}
                    options={departments}
                    getOptionLabel={(option) => option.name}
                    renderInput={(params) => <TextField {...params} label="Select Ministry" />}
                    style={{ width: 300 }}
                />

                <div>
                    <div
                        type="button"
                        className="bg-red-500 text-white cursor-pointer font-semibold py-2 px-4 rounded-md hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onClick={() => onSearch(currOptn)}
                    >
                        Search
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchBar;
