import React from 'react'
import {Button , Box ,TextField ,Container} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
export default function Login() {
    return (
        <div>
            <Container component="form" maxWidth="sm">
            <Box sx={{ height: '60vh' }} margin="15%">
            <TextField label="Email or phone number" color="secondary" fullWidth sx={{height:'7ch', marginY:'1%'}}/>
            <TextField label="Password" color="secondary" type="password" fullWidth sx={{height:'7ch', marginY:'1%'}}/>
            <Button variant="contained" fullWidth sx={{height:'7ch', marginY:'1%'}} color="primary">Login</Button>
            <hr />
            <Button variant="contained" fullWidth sx={{height:'7ch', marginY:'2%'}} color="primary"><GoogleIcon />  Login width Google</Button>
            <Button variant="contained" fullWidth sx={{height:'7ch', marginY:'1%'}} color="primary"><AppleIcon />  Login width Apple</Button>
            </Box>
            </Container>
        </div>
    )
}
