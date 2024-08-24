import React from 'react';
import { TextField, Autocomplete, Button } from '@mui/material';

const SearchBar = ({ ministries, selectedMinistry, setSelectedMinistry, onSearch }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Autocomplete
                value={selectedMinistry}
                onChange={(event, newValue) => setSelectedMinistry(newValue)}
                options={ministries}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => <TextField {...params} label="Select Ministry" />}
                style={{ width: 300 }}
            />
            <Button variant="contained" onClick={onSearch}>Search</Button>
        </div>
    );
};

export default SearchBar;
