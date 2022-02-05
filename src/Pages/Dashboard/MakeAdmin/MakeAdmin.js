import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Alert } from '@mui/material';
import useAuth from '../../../hooks/useAuth';



const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const {token} = useAuth();
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdmitSubmit = e => {
        const user = { email };
        fetch('https://rocky-refuge-36307.herokuapp.com/users/admin',{
          method: 'PUT',
          headers: {
              'authorization': `Bearer ${token}`,
              'content-type' : 'application/json'
          },
          body: JSON.stringify(user)  
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                setSuccess(true);
                console.log(data);
                
            }
            
        })
       e.preventDefault();
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdmitSubmit}>
            <TextField
               sx={{width: '50%'}}
               label="Email"
               type="email"
               onBlur={handleOnBlur} 
               variant="standard" />
            <Button type="submit" variant='contained'>Make Admin</Button>
               
            </form>
            {
               success && <Alert severity="success">Made Admin Successfully!</Alert>

            }
        </div>
    );
};

export default MakeAdmin;