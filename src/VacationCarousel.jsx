import React from 'react';
import { Box } from '@mui/material';

const VacationCarousel = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        overflowX: 'auto',
        scrollSnapType: 'x mandatory',
        width: '100%',
      }}
    >
      <Box
        sx={{
          flexShrink: 0,
          scrollSnapAlign: 'center',
          width: '100%', // You can adjust the width as needed
        }}
      >
        <img src="/img/vacation-01.jpg" alt="Vacation 01" style={{ width: '100%' }} />
      </Box>
      <Box
        sx={{
          flexShrink: 0,
          scrollSnapAlign: 'center',
          width: '100%',
        }}
      >
        <img src="/img/vacation-02.jpg" alt="Vacation 02" style={{ width: '100%' }} />
      </Box>
      <Box
        sx={{
          flexShrink: 0,
          scrollSnapAlign: 'center',
          width: '100%',
        }}
      >
        <img src="/img/vacation-03.jpg" alt="Vacation 03" style={{ width: '100%' }} />
      </Box>
      <Box
        sx={{
          flexShrink: 0,
          scrollSnapAlign: 'center',
          width: '100%',
        }}
      >
        <img src="/img/vacation-04.jpg" alt="Vacation 04" style={{ width: '100%' }} />
      </Box>
      <Box
        sx={{
          flexShrink: 0,
          scrollSnapAlign: 'center',
          width: '100%',
        }}
      >
        <img src="/img/vacation-05.jpg" alt="Vacation 05" style={{ width: '100%' }} />
      </Box>
      <Box
        sx={{
          flexShrink: 0,
          scrollSnapAlign: 'center',
          width: '100%',
        }}
      >
        <img src="/img/vacation-06.jpg" alt="Vacation 06" style={{ width: '100%' }} />
      </Box>
    </Box>
  );
};

export default VacationCarousel;
