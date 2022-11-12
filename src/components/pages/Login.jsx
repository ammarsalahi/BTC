import React,{useState} from 'react'
import {Button , Box ,TextField ,Container,Typography} from '@mui/material';
import PasswordStrengthBar from 'react-password-strength-bar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {Link} from 'react-router-dom'
import { QrCode } from '@mui/icons-material';
import qrcode from '../../assets/qrcode.png';

export default function Login() {
    const lightTheme = createTheme({
        palette: {
          mode: 'light',
        },
      });

      const [password, setPassword] = useState("")
    return (
        <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
            <Container component="form" maxWidth="md" sx={{bgcolor:"#fff",p:5,width:700}}>
            
                <Box className="row">
                    <Box className="col-lg-8 col-md-8 col-12">
                        <Box className="d-flex justify-content-center align-items-center my-4">
                        <Typography variant="h4" color="#000" sx={{mb:4}}>Welcome to BitMnc</Typography>
                        </Box>
                        <TextField label="Phone/Email/Sub-Account" color="dark" fullWidth 
                        focused sx={{textcolor:"#000",height:'7ch', my:1}} 
                        variant="filled" type="email" 
                        inputProps={{
                            style:{color:"black"}
                        }}/>
                    
                        <TextField onChange={(e)=>setPassword(e.target.value)} 
                        label="password" color="dark" fullWidth focused 
                        sx={{textcolor:"#000",height:'7ch', my:1}} 
                        variant="filled" type="password" 
                        inputProps={{
                            style:{color:"black"}
                        }}/>
                        <Box className="d-flex justify-content-end align-items-center">
                            <Link>forget password?</Link>
                        </Box>    
                        <Button variant="contained" fullWidth sx={{fontWeight:'700',height:'5ch', my:4,fontSize:"18px"}} color="yellow" >Login</Button>
                        <Box className="d-flex justify-content-center align-items-center">
                            <Typography variant="p" component="div" color="#000">Don't have an Account? <Link to="/signup">Signup</Link></Typography>
                        </Box>
                    </Box>

                    <Box className="col-lg-4 col-md-4 col-12 pt-4">
                        <Box className="d-flex justify-content-center align-items-center">
                            <Typography variant="p" component="div" color="#000">
                                QR Code Expired
                            </Typography>
                        </Box>
                        <Box
                         component="img"
                         src={qrcode}
                         sx={{width:"200px",height:"200px"}}
                        />
                        <Box className="d-flex justify-content-center align-items-center">
                            <Typography variant="p" component="div" color="#000">
                                refresh and scan again 
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                    
            </Container>
        </div>
    )
}
