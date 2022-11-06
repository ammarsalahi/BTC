import React from 'react'
import {Button , Box ,TextField ,Container} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
export default function Login() {
    return (
        <div>
            <Container component="form" maxWidth="sm">
                <Box sx={{ height: '60vh' }} margin="15%">
                    <TextField label="Email or phone number" color="warning" fullWidth sx={{height:'7ch', marginY:'1%'}}/>
                    <TextField label="Password" color="warning" type="password" fullWidth sx={{height:'7ch', marginY:'1%'}}/>
                    <Button variant="contained" fullWidth sx={{fontWeight:'700',height:'7ch', marginY:'1%'}}  color="yellow">Login</Button>
                    <hr />
                    <Button variant="contained" fullWidth sx={{color:"white" ,height:'7ch', marginY:'2%'}} color="btn"><GoogleIcon />  Login width Google</Button>
                    <Button variant="contained" fullWidth sx={{color:"white" ,height:'7ch', marginY:'1%'}} text-color="btn" color="btn"><AppleIcon />  Login width Apple</Button>
                </Box>
            </Container>
        </div>
    )
}
