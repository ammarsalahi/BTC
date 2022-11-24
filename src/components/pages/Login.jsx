import React,{useState} from 'react'
import {Button , Box ,TextField ,Container,Typography, InputAdornment} from '@mui/material';
import PasswordStrengthBar from 'react-password-strength-bar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {Link} from 'react-router-dom'
import { QrCode, Visibility, VisibilityOff } from '@mui/icons-material';
import qrcode from '../../assets/qrcode.png';
import MobileNumber from '../elements/login/MobileNumber';
import EmailAddress from '../elements/login/EmailAddress';
import logo from '../../assets/logolight.png'
import qrcodes from '../../assets/qr-code-xxl.png'
export default function Login() {
    const [value, setValue] = React.useState(0);

    const handleChange =(props)=>(event) => {
      setValue(props);
    };
  
    const theme = createTheme({
      palette: {
        primary: {
          main: '#36454F',
        },
        
      },
    });
    
     const boxbtnstyle={
      border:"1px solid #a4a6b4",
      borderRadius:"10px",
      height:"58px",
      width:"100%",
      px:"5px",
      py:"5px",
      display:"flex",
      color:"#fff",
    }
   
    const darkbtnstyle={
      height: "46px",
      width: "50%",
      borderRadius:"7px",
      textTransform:"none",
      '&:hover':{backgroundColor:"#36454F",color:"#fff"}
    }
    return (
        <div className="d-flex justify-content-center align-items-center card-container pt-2">
        
        <Container component="form" maxWidth="md" className="register-container">
          <div className='container row'>
          <Box variant="outlined" className='col-lg-8 col-12'>
                <Box >
                <Box className="d-flex justify-content-start align-items-center">
                <Typography variant="h4" sx={{mb:4,ml:3}}>Welcome in to 
                   <Box
                      component="img"
                      src={logo}
                      sx={{height:"45px"}}
                   />
                </Typography>
                </Box>
                  <Box sx={{px:2}}>
                      <ThemeProvider theme={theme}>
                        <Box sx={boxbtnstyle}>
                            <Button variant={value===0?"contained":"standard"} 
                              sx={darkbtnstyle} 
                              onClick={handleChange(0)}
                              style={{marginRight:"1%"}}
                            >Mobile</Button>
                            <Button 
                              variant={value===1?"contained":"standard"} 
                              sx={darkbtnstyle} 
                              color="primary"
                              onClick={handleChange(1)}
                            >Email</Button>
                        </Box>
                        </ThemeProvider>   
                      <Box sx={{py:3}}>
                        {value===0 && <MobileNumber />}
                        {value===1 && <EmailAddress />}
                      </Box>  
                      <Box className="d-flex justify-content-center align-items-center">
                            <Typography variant="p" component="div">Already Have Account? <Link to="/signup">signup</Link></Typography>
                      </Box>
                  </Box>
                </Box>
            </Box>
            <Box className="col-lg-4 d-lg-block d-none p-2">
                <div className="d-flex justify-content-center align-items-center h-100 w-100" >
                  <div>
                    <Box
                      component="img"
                      src={qrcodes}
                      sx={{width:"75%",mx:2}}
                    />
                    <Typography variant="p" component="div" sx={{py:2,px:5}}>
                        Login with QR Code
                    </Typography>
                    <Typography variant="p" component="div" sx={{py:2,px:2,fontSize:"12px"}}>
                        Scan this QR Code and Login with App
                    </Typography>
                    <Button variant="contained" color="light" sx={{mx:6}}>
                        Download App
                    </Button>
                  </div>                   
                </div>
            </Box>
          </div>
        </Container>
     </div>
       
    )
}
