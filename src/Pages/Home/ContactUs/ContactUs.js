import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import bg from '../../../images/appointment-bg.png'


const contactBanner = {
    background: `url(${bg})`,
    marginTop: 100,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity'
}




const ContactUs = () => {
    
    const handleContactSubmit = e => {
        alert('Submitted');
        e.preventDefault();
      }


    return (
        

        <Box sx={{p:4}} style={contactBanner}>
            <Typography sx={{color:'#5CE7ED', p:2 }} id="transition-modal-title" variant="h5" component="h2">
               CONTACT US
            </Typography>
            <Typography sx={{color: 'white', m:1}} id="transition-modal-title" variant="h4" component="h2">
               Always Connect with us
            </Typography>
            <form onSubmit={handleContactSubmit}>
            <TextField
               sx={{width: '50%', m: 2, backgroundColor: 'white' }}
               id="outlined-size-small"
               defaultValue='Email Address'
               size="small"
              />
            <TextField
               sx={{width: '50%', m: 2, backgroundColor: 'white'}}
               id="outlined-size-small"
               defaultValue='Subject'
               size="small"
              />
            <TextField
              sx={{width: '50%', m: 2, backgroundColor: 'white'}}
              id="outlined-multiline-static"
              multiline
              rows={4}
              defaultValue="Your Message"
            />
            <br/>
            <Button type='submit' variant="contained">SUBMIT</Button>
            </form>
        </Box>
    );
};

export default ContactUs;