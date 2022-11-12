import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { Card ,Container ,AppBar , Tabs , Tab , Typography , Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MobileNumber from '../elements/register/MobileNumber'
import EmailAddress from '../elements/register/EmailAddress';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {Link} from 'react-router-dom'
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
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
     <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
        
        <Container component="form" maxWidth="sm">
            <Box sx={{ minWidth: 275 }}>
            <Box variant="outlined" sx={{bgcolor:"#fff",px:3,pt:2.5}}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
              <Box className="d-flex justify-content-center align-items-center">
              <Typography variant="h4" color="#000" sx={{mb:4}}>Create account</Typography>
              </Box>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Mobile number" sx={{color:"#000",ml:3}} {...a11yProps(0)} />
                <Tab label="Email address" sx={{color:"#000"}} {...a11yProps(1)} />
            </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
            <MobileNumber />
            </TabPanel>
            <TabPanel value={value} index={1}>
            <EmailAddress />
            </TabPanel>
              <Box className="d-flex justify-content-center align-items-center pb-3">
                  <Typography variant="p" component="div" color="#000">Already Have Account? <Link to="/login">login</Link></Typography>
              </Box>
            </Box>
            </Box>
        </Container>
     </div>

     
    
  );
}