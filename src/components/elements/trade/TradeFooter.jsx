import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TabPanel from '../global/TabPanel';
import {Link} from 'react-router-dom'


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
    <Box>
    <Box>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Open Orders(0)" {...a11yProps(0)} />
        <Tab label="Order History" {...a11yProps(1)} />
        <Tab label="Trade History" {...a11yProps(2)} />
        <Tab label="Funds" {...a11yProps(3)} />
        <Tab label="positions(0)" {...a11yProps(4)} />
      </Tabs>
    </Box>
    <TabPanel value={value} index={0}>
        <Box sx={{py:"50px"}} className="d-flex justify-content-center align-items-center">
            <Typography varaint='p' component="div" fontSize={14}>
                <Link>Login</Link> or <Link>Register Now</Link> to trade
            </Typography>
        </Box>
    </TabPanel>
    <TabPanel value={value} index={1}>
        <Box sx={{py:"30px"}} className="d-flex justify-content-center align-items-center">
            <Typography varaint='p' component="div" fontSize={14}>
                <Link>Login</Link> or <Link>Register Now</Link> to trade
            </Typography>
        </Box>
    </TabPanel>
    <TabPanel value={value} index={2}>
        <Box sx={{py:"30px"}} className="d-flex justify-content-center align-items-center">
            <Typography varaint='p' component="div" fontSize={14}>
                <Link>Login</Link> or <Link>Register Now</Link> to trade
            </Typography>
        </Box>
    </TabPanel>
    <TabPanel value={value} index={3}>
        <Box sx={{py:"30px"}} className="d-flex justify-content-center align-items-center">
            <Typography varaint='p' component="div" fontSize={14}>
                <Link>Login</Link> or <Link>Register Now</Link> to trade
            </Typography>
        </Box>
    </TabPanel>
    <TabPanel value={value} index={4}>
        <Box sx={{py:"30px"}} className="d-flex justify-content-center align-items-center">
            <Typography varaint='p' component="div" fontSize={14}>
                <Link>Login</Link> or <Link>Register Now</Link> to trade
            </Typography>
        </Box>
    </TabPanel>
    </Box>
   
  )
}
