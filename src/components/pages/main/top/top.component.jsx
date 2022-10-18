import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function TopProduct() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '90vw',
          height: '80vh',
        },
      }}
    >
      <Paper elevation={0} />
    </Box>
  );
}
