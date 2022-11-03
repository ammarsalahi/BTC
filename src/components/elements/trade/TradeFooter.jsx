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
export default function TradeFooter() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className="pt-2">
      <Tabs value={value} onChange={handleChange}  aria-label="basic tabs example">
        <Tab label="Open Orders(0)" {...a11yProps(0)} sx={value===0 && {borderTop:"2px solid orange"}} />
        <Tab label="Order History" {...a11yProps(1)} sx={value===1 && {borderTop:"2px solid orange"}} />
        <Tab label="Trade History" {...a11yProps(2)} sx={value===2 && {borderTop:"2px solid orange"}} />
        <Tab label="Funds" {...a11yProps(3)} sx={value===3 && {borderTop:"2px solid orange"}} />
        <Tab label="positions(0)" {...a11yProps(4)} sx={value===4 && {borderTop:"2px solid orange"}} />
      </Tabs>
      <Box>
        <TabPanel>
          <Box sx={{py:"130px"}} className="d-flex justify-content-center">
              <Typography>
                <Link className='spacial'>Login</Link> or <Link className='spacial'>Register</Link> for Trade
              </Typography>
          </Box>
        </TabPanel>
      </Box>
    </Box>


  )
}
