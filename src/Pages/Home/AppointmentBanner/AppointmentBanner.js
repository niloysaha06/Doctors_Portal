import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';
import { fontSize } from '@mui/system';

const appointmentBanner = {
    background: `url(${bg})`,
    marginTop: 175,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity'
}

const AppointmentBanner = () => {
    return (
    <Box style={appointmentBanner} sx={{ flexGrow: 1, py: 2  }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img style={{width: '400px', marginTop: '-110px'}} src={doctor} alt="" />
        </Grid>
        <Grid item xs={12} md={6} sx={{display: 'flex',justifyContent: 'flex-start', alignItems: 'center' ,textAlign: 'left' }}>
          <Box>
          <Typography variant='h6' sx={{mb: 4}} style={{color:'#5CE7ED'}}>
              Appointment
          </Typography>
          <Typography variant='h4'  style={{color:'white'}}>
            Make an Appointment <br/> Today
          </Typography>
          <Typography variant='h5' sx={{my: 4}} style={{color:'white', fontSize:14, fontWeight: 300}}>
            It is a long established fact that a reader that will be distracted by the readable content of a page when looking at it's. 
          </Typography>
          <Button variant="contained" style={{backgroundColor:'#5CE7ED'}}>Learn More</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
    );
};

export default AppointmentBanner;