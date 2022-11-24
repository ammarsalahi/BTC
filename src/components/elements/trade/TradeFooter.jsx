import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TabPanel from '../global/TabPanel';
import { Link } from 'react-router-dom'


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default function TradeFooter({height}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Tabs value={value} onChange={handleChange}  aria-label="basic tabs example">
        <Tab label="Open Orders(0)" {...a11yProps(0)} sx={value===0 && {borderTop:"2px solid #fff"}} />
        <Tab label="Order History" {...a11yProps(1)} sx={value===1 && {borderTop:"2px solid #fff"}} />
        <Tab label="Trade History" {...a11yProps(2)} sx={value===2 && {borderTop:"2px solid #fff"}} />
      </Tabs>
      <Box>
        <TabPanel>
          <Box sx={{height:"250px"}} className="d-flex justify-content-center align-items-center">
              <Typography variant="p" component="div" sx={{color:"#8c8e90"}}>
                <Link className="logo" to="/login">Login</Link> or <Link className='logo' to="/signup">SignUp</Link> go to Trade
              </Typography>
          </Box>
        </TabPanel>
      </Box> 
    </Box>


  )
}
