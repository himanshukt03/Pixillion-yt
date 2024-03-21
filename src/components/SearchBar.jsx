import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IconButton, InputBase, Box, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { profilePicture } from '../utils/constants';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  // const location = useLocation();
  // var username = location.state.id;
  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: 20,
          background: 'white',
          border: '3px solid #7d13ff',
          pl: 2,
          boxShadow: 'none',
          mr: 2,
          width: '350px',
        }}
      >
        <InputBase
          className="search-bar"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ flex: 1 }}
        />
        <IconButton type="submit" sx={{ p: '5px', color: '#7D13FF' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/Login">
          <Avatar alt="" src={profilePicture} sx={{ width: 34, height: 34, mr: 4 }} />
        </Link>
      </Box>
    </Box>
  );
};

export default SearchBar;
