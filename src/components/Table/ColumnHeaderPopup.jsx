import React, { useState, useRef, useEffect } from 'react';
import { Typography, Fade, IconButton,Box } from '@mui/material';
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { FilterAlt } from '@mui/icons-material';

const ColumnHeaderPopup = ({ column, sortOrder, onSort, onFilterIconClick }) => {
  const [showIcons, setShowIcons] = useState(false);
  const containerRef = useRef(null);

  const handleHeaderClick = () => {
    setShowIcons(!showIcons);
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setShowIcons(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Box onClick={handleHeaderClick} ref={containerRef} sx={{width:'100%', display:'flex',flexDirection:'row',alignItems:'center',transition: 'width 0.5s ease',cursor: 'pointer',overflowX:'hidden'}}>
      <Box sx={{ flex: showIcons ? '0 0 50%' : '0 0 100%', transition: 'flex 0.5s ease' }}>
        <Typography sx={{ color: 'white'}}>{column}</Typography>
      </Box>
      <Box sx={{ flex: showIcons ? '0 0 50%' : '0 0 0%', transition: 'flex 1s ease',display: 'flex' }}>
        <Fade in={showIcons} timeout={300} style={{ transition: 'opacity 0.5s ease' }}>
          <Box sx={{display:'flex'}}>
            <IconButton size='small' onClick={(e) => { e.stopPropagation(); onSort(column); }} sx={{ color: 'white', fontSize: { xs: 'small' } }}>
              {sortOrder[column] === 'asc' ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
            </IconButton>
            <IconButton size='small' onClick={(e) => { e.stopPropagation(); onFilterIconClick(e, column); }} sx={{ color: 'white',float:'right' }}>
              <FilterAlt sx={{color:'white'}} />
            </IconButton>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
};

export default ColumnHeaderPopup;
