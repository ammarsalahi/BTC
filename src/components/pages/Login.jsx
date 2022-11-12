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
        // <Container component="form" maxWidth="md" sx={{justifyContent: 'center'}}>
        // <Box sx={{height: 600,width: 600,marginY:"15%",marginX:"15%",bgcolor:"#fff" }}>
        //  <div className="row">
        //  <div className="col-6">
        //  <Box sx={{height: 600,width: 300  ,justifyContent: 'center' , marginY:"48%",marginX:"20%"}}>
        //         <Typography variant="h5" sx={{mb:""}}>Welcome to</Typography>
        //         <TextField label="Email/Phone/Sub-account" color="warning" fullWidth sx={{height:'7ch' , width:"30ch",ml:"2%",justifyContent: 'center' }}/>
        //         <TextField label="Password" color="warning" type="password" fullWidth sx={{height:'7ch', width:"30ch",ml:"2%" ,marginY:'1%',justifyContent: 'center' }}/>
        //         <Button variant="contained" fullWidth sx={{fontWeight:'700',height:'7ch',ml:"2%", width:"32vh" ,justifyContent: 'center'}}  color="yellow" >Login</Button>
        //     </Box>
        //  </div>
        //  <div className="col-lg-6">
        //  <Box sx={{height: 600,width: 300 , margin:"3%",justifyContent: 'center'  }} alignItems="center">
        //         <TextField label="Email or phone number" color="warning" sx={{height:'7ch', marginY:'5%' , marginX:"20%"}}/>
        //         <Box
        //           display="flex"
        //           justifyContent="center"
        //           alignItems="center"

        //             component="img"
        //             sx={{
        //             height: 100,
        //             width: 100,

        //             }}
        //             alt="The house from the offer."
        //             src="https://miro.medium.com/max/375/1*t6n0cVeSyG2i_25z-9Mwfg.png"
        //         />
        //         <Button variant="contained"  sx={{fontWeight:'700',height:'7ch', marginY:'5%' , marginX:"20%"}}  color="yellow">Login</Button>
        //     </Box>

        //  </div>
        //  </div>
        //  </Box>
        // </Container>
    )
}
