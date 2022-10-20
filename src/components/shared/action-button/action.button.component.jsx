import * as React from 'react';
import './action.button.component.scss'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import SmsIcon from '@mui/icons-material/Sms';

export default function FloatingActionButton() {
  return (
    <Box className='action-button-position' sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="edit">
        <SmsIcon />
      </Fab>
    </Box>
  );
}
