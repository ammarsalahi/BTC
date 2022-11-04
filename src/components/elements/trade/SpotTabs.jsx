import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {TableContainer,Table,TableBody,TableRow,TableHead,TableCell, FormGroup, InputAdornment, Button } from '@mui/material';
import TabPanel from '../global/TabPanel';
import LimitForm from './spotForm/LimitForm';
import StopForm from './spotForm/StopForm'
import MarketForm from './spotForm/MarketForm';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default function CoinPriceTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{py:1,px:0.5}}>
    <Box>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Limit" {...a11yProps(0)} sx={value===0 && {borderTop:"2px solid #fff"}} />
        <Tab label="Market" {...a11yProps(0)} sx={value===1 && {borderTop:"2px solid #fff"}} />
        <Tab label="Stop" {...a11yProps(0)} sx={value===2 && {borderTop:"2px solid #fff"}} />
      </Tabs>
    </Box>
    <TabPanel value={value} index={0}>
        <Box className="row px-2">
          <div className='col-lg-6 col-12 g-0'>
            <LimitForm  coin="USDT"/>
          </div>
          <div className="col-lg-6 col-12 g-0">
          <LimitForm coin="BTC"/>
          </div>
        </Box>
    </TabPanel>
    <TabPanel value={value} index={1}>
        <Box className="row px-2">
          <div className='col-lg-6 col-12 g-0'>
            <MarketForm  coin="USDT"/>
          </div>
          <div className="col-lg-6 col-12 g-0">
          <MarketForm coin="BTC"/>
          </div>
        </Box>
    </TabPanel>
    <TabPanel value={value} index={2}>
        <Box className="row px-2">
          <div className='col-lg-6 col-12 g-0'>
            <StopForm  coin="USDT"/>
          </div>
          <div className="col-lg-6 col-12 g-0">
          <StopForm coin="BTC"/>
          </div>
        </Box>
    </TabPanel>
   </Box>
  )
 } 