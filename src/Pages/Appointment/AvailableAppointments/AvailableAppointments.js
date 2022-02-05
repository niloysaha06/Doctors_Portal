import { Alert, Container, Grid, Typography } from '@mui/material';
import React, {useState} from 'react';
import Booking from '../Booking/Booking';


const bookings =[
    {
        id:1,
        name: 'Teeth Orthodontics',
        time: '08:00 AM - 09:00 AM',
        space: 10
    },
    {
        id:2,
        name: 'Cosmetic dentistry',
        time: '10:05 AM - 11:30 AM',
        space: 10
    },
    {
        id:3,
        name: 'Teeth Cleaning',
        time: '05:00 PM - 06:30 PM',
        space: 10
    },
    {
        id:4,
        name: 'Cavity Protection',
        time: '07.00 AM - 08:30 AM',
        space: 10
    },
    {
        id:5,
        name: 'Pediatric Dental',
        time: '11:00 AM - 12.00 PM',
        space: 10
    },
    {
        id:6,
        name: 'Oral surgery',
        time: '07:00 AM - 08:00 AM',
        space: 10
    }
]

const AvailableAppointments = ({date}) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography sx={{color: 'info.main',mb: 3}} variant="h4">Available Appointments on {date.toDateString()}</Typography>
            {
                       bookingSuccess && <Alert severity="success">Appointment Successfully</Alert>

                      }
            <Grid container spacing={2}>
               {
                   bookings.map(booking => <Booking
                   Key={booking.id}
                   booking={booking}
                   date={date}
                   setBookingSuccess= {setBookingSuccess}
                   ></Booking>)

               }
  
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;