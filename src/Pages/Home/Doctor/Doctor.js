import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Doctor = (props) => {
    const {name, phoneNumber, img} = props.doctor;
    return (
        <Grid item xs={4} sm={4} md={4}>
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
          <CardMedia
             component="img"
             style={{ width: 'auto', height: '250px', margin: '0 auto'}}
             image={img}
             alt="green iguana"
      />
          <CardContent>
           
            <Typography sx={{ fontWeight: 600, m: 1}} variant="h5" component="div">
               {name}
            </Typography>
           
            <Typography variant="small" color="text.secondary">
               {phoneNumber}
            </Typography>

          </CardContent>
         
       </Card>
    </Grid>
    );
};

export default Doctor;