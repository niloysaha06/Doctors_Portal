import React from 'react';
import treatment from '../../../images/treatment.png';
import Grid from '@mui/material/Grid';
import { Button, Typography, Container, Box } from '@mui/material';


const verticalCenter ={
    display: 'flex',
    alignItems: 'center',
    height: 400
    
}

const DentalCare = () => {
    return (
    <Container sx={{ flexGrow: 1, py:12}}>
      <Grid container spacing={2}>
      <Grid item xs={12} md={5} style={verticalCenter}>
          <img style={{width: 450, height: 550}} src={treatment} alt="" />
        </Grid>
        <Grid item style={{...verticalCenter, textAlign: 'left'}} xs={12} md={7}>
          <Box sx={{m: 3}}>
          <Typography variant='h3'>
               Exceptional Dental  <br/>
               Care, on Your Terms
          </Typography>
          <Typography variant='h6' sx={{ my:3, fontSize: 13, fontWeight: 300,color: 'gray' }}>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti aliquam, possimus illum voluptatem consequuntur tempore ipsa, sapiente animi obcaecati officiis magnam consectetur vitae eum deserunt sequi a saepe? Voluptas, est. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti aliquam, possimus illum voluptatem consequuntur tempore ipsa, sapiente animi obcaecati officiis magnam consectetur vitae eum deserunt sequi a saepe? Voluptas, est. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti aliquam, possimus illum voluptatem consequuntur tempore ipsa, sapiente animi obcaecati officiis magnam consectetur vitae eum deserunt sequi a saepe? Voluptas, est. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti aliquam, possimus illum voluptatem consequuntur tempore ipsa, sapiente animi obcaecati officiis magnam consectetur vitae eum deserunt sequi a saepe? Voluptas, est. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti aliquam, possimus illum voluptatem consequuntur tempore ipsa, sapiente animi obcaecati officiis magnam consectetur vitae eum deserunt sequi a saepe? Voluptas, est.


          </Typography>
          <Button variant="contained" style={{backgroundColor:'#5CE7ED'}}>Learn More</Button>
          </Box>
        </Grid>
        
      </Grid>
    </Container>
    );
};

export default DentalCare;