import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { Card ,Container ,AppBar , Tabs , Button , Typography , Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MobileNumber from '../elements/register/MobileNumber'
import EmailAddress from '../elements/register/EmailAddress';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {Link} from 'react-router-dom'
import registers from '../../assets/registers.png'

export default function FullWidthTabs() {

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
        
        <Container component="form" maxWidth="lg" className="register-container">
          <div className='container row'>
          <Box variant="outlined" className='col-lg-6 col-12'>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
                    <Box className="d-flex justify-content-start align-items-start">
                <Typography variant="h4" sx={{mb:4,ml:3}}>Create account</Typography>
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
                            <Typography variant="p" component="div">Already Have Account? <Link to="/login">login</Link></Typography>
                      </Box>
                  </Box>
                </Box>
            </Box>
            <Box className="col-lg-6 d-lg-block d-none">
              <Box 
                component="img"
                src={registers} 
                sx={{width:"100%"}}
                />
            </Box>
          </div>
           
           
        </Container>
     </div>

     
    
  );
}

