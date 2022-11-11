// import React from 'react'
// import {Button , Box ,TextField ,Container, IconButton, InputAdornment } from '@mui/material';
// import GoogleIcon from '@mui/icons-material/Google';
// import AppleIcon from '@mui/icons-material/Apple';
// import { VisibilityOff ,Visibility} from '@mui/icons-material'
// import {useState,useEffect} from 'react'

// export default function Register() {

// const [password, setPassword] = useState("")
// const [repassword, setRepassword] = useState("")
// const [errorpass,setErrorpass]=useState(false)
// const [show,setShow]=useState(false);

// const handleShow=(event)=>{
//     if(show){
//         setShow(false);
//     }else{
//         setShow(true)
//     }
// }
// const handlePassword = ()=>{
//   if(password!== repassword){
//     setErrorpass(true)
//   }else{
//     setErrorpass(false)
//   }
// }

//     useEffect( ()=>{
//       handlePassword()
     
//     },[repassword])

//     return (
//         <div>
//             <Container component="form" maxWidth="sm">
//                 <Box sx={{ height: '60vh' }} margin="15%">
//                     <TextField label="Email or phone number" color="yellow" fullWidth sx={{height:'7ch', marginY:'1%'}} />
//                     <TextField label="Password" color="yellow" fullWidth sx={{height:'7ch', marginY:'1%'}} type={show?"text":"password"}
//           value={password}
//           onChange={(e)=>setPassword(e.target.value)}
//           InputProps={{
//             endAdornment:(
//                 <InputAdornment position='end'>
//                   <IconButton
//                   onClick={handleShow}
//                   >
//                    {show?<VisibilityOff/>: <Visibility/>}
//                   </IconButton>
//                 </InputAdornment>
//             ),
//           }}
//         />
//                     <TextField label="Repeat password" color="yellow" fullWidth sx={{height:'7ch', marginY:'1%'}} type={show?"text":"password"}
//           error={errorpass}
//           value={repassword}
//           onChange={(e)=>setRepassword(event.target.value)}
//           onBlur={handlePassword}
//           InputProps={{
//             endAdornment:(
//                 <InputAdornment position='end'>
//                   <IconButton
//                   onClick={handleShow}
//                   >
//                    {show?<VisibilityOff/>: <Visibility/>}
//                   </IconButton>
//                 </InputAdornment>
//             ),
//           }}
//         />
//                     <Button variant="contained" fullWidth sx={{fontWeight:'700',height:'7ch', marginY:'1%'}} color="yellow" >Login</Button>

//                 </Box>
//             </Container>
//         </div>
//     )
// }

import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { Card ,Container ,AppBar , Tabs , Tab , Typography , Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MobileNumber from './LoginFiles/MobileNumber'
import EmailAddress from './LoginFiles/EmailAddress'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
      <Container component="form" maxWidth="sm">
            <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined" sx={{bgcolor:"#fff",padding:"5%", marginY:"7%", marginX:"7%"}}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
            <Typography variant="h3" color="#000" sx={{mb:"5%"}}>Create account</Typography>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Mobile number" sx={{color:"#000"}} {...a11yProps(0)} />
                <Tab label="Email address" sx={{color:"#000"}} {...a11yProps(1)} />
            </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
            <MobileNumber />
            </TabPanel>
            <TabPanel value={value} index={1}>
            <EmailAddress />
            </TabPanel>
            </Card>
            </Box>
      </Container>
    
  );
}