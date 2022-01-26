import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';


const services = [
    {
    name: 'Fluoride Treatment',
    description: 'Fluoride is a naturally occurring mineral that helps build strong teeth and prevent cavities',
    img: fluoride
},
{
    name: 'Cavity Filling',
    description: 'A cavity filling is when the dentist fills the opening in your tooth with some kind of material.',
    img: cavity
},
{
    name: 'Teeth Whitening',
    description: 'L.W,also known as power whitening,is another type of teeth whitening system that a dentist can provide.',
    img: whitening
}
]

const Services = () => {
    return (
      <Box sx={{ flexGrow: 1, py: 8 }}>
        <Container>
            <Typography sx={{ fontWeight: 500, m: 2, color: 'info.main' }} variant="h6" component="div">
               Our Services
            </Typography>
            <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
               Services We Provide
            </Typography>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
           {
             services.map(service => <Service
               Key = {service.key}
               service = {service}
             ></Service> )  
           }
          </Grid>
        </Container>
      </Box>
    );
};

export default Services;