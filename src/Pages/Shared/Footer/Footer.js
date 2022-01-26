import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

const Footer = () => {
    return (
        <Box  sx={{ flexGrow: 1, py: 8 }}>
            <Container>
      <Grid container spacing={2}>
        
        <Grid item xs={12} md={4} sx={{display: 'flex',justifyContent: 'flex-start', alignItems: 'center' ,textAlign: 'left' }}>
        <Box >
          <Typography variant='h4' style={{color:'#5CE7ED'}}>
              Services
          </Typography>
          <Typography sx={{my:2}} variant='h6' style={{fontSize:13, fontWeight: 300}} >
             Emergency Dental Care
          </Typography>
          <Typography sx={{my:2}} variant='h6'  style={{fontSize:13, fontWeight: 300}}>
             Check Up
          </Typography>
          <Typography sx={{my:2}} variant='h6'  style={{fontSize:13, fontWeight: 300}}>
             Treatment of Personal Diseases
          </Typography>
          <Typography sx={{my:2}} variant='h6'  style={{fontSize:13, fontWeight: 300}}>
             Tooth Extraction
          </Typography>
          
         
          </Box>
        </Grid>
        <Grid item xs={12} md={4} sx={{display: 'flex',justifyContent: 'flex-start', alignItems: 'center' ,textAlign: 'left' }}>
        <Box>
          <Typography variant='h4' style={{color:'#5CE7ED'}}>
              Oral Health
          </Typography>
          <Typography sx={{my:2}} variant='h6' style={{fontSize:13, fontWeight: 300}} >
             Emergency Dental Care
          </Typography>
          <Typography sx={{my:2}} variant='h6'  style={{fontSize:13, fontWeight: 300}}>
             Check Up
          </Typography>
          <Typography sx={{my:2}} variant='h6'  style={{fontSize:13, fontWeight: 300}}>
             Treatment of Personal Diseases
          </Typography>
          <Typography sx={{my:2}} variant='h6'  style={{fontSize:13, fontWeight: 300}}>
             Tooth Extraction
          </Typography>
          
         
          </Box>
        </Grid>
        <Grid item xs={12} md={4} sx={{display: 'flex',justifyContent: 'flex-start', alignItems: 'center' ,textAlign: 'left' }}>
          <Box>
          <Typography variant='h4'  style={{color:'#5CE7ED'}}>
              Our Address
          </Typography>
          <Typography sx={{my:2}} variant='h6' style={{fontSize:13, fontWeight: 300}} >
            New York-101010 Hudson <br/> Yards
          </Typography>
          
         
          </Box>
        </Grid>
       
      </Grid>
      <Typography variant='h6' sx={{color:'#5CE7ED',fontSize:14, fontWeight: 500, my: 4}}>
              Copyright 2022 All Right Reserved
          </Typography>
      </Container>
    </Box>
    );
};

export default Footer;