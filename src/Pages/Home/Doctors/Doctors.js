import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import doctor from '../../../images/doctor-small.png'
import Doctor from '../Doctor/Doctor';


const doctors =[
    { 
      id: '1',
      name: 'Dr.Caudi',
      phoneNumber: '+61 452 200 126',
      img: doctor  
    },
    { 
      id: '2',
      name: 'Dr.Caudi',
      phoneNumber: '+61 452 200 126',
      img: doctor   
    },
    { 
      id: '3',
      name: 'Dr.Caudi',
      phoneNumber: '+61 452 200 126',
      img: doctor 
    }
]

const Doctors = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>
            <Typography sx={{ fontWeight: 500, my: 6, color: 'info.main' }} variant="h4" component="div">
               Our Doctors
            </Typography>
            
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
           {
               doctors.map(doctor => <Doctor
               Key={doctor.id}
               doctor={doctor}
               ></Doctor>)
           }
          </Grid>
        </Container>
      </Box>
    );
};

export default Doctors;