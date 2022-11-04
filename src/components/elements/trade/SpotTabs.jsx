import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {TableContainer,Table,TableBody,TableRow,TableHead,TableCell, FormGroup, InputAdornment, Button } from '@mui/material';
import TabPanel from '../global/TabPanel';
import LimitForm from './spotForm/LimitForm';

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
    {/* <Box>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Spot" {...a11yProps(0)} sx={value===0 && {borderTop:"2px solid orange"}} />
      
      </Tabs>
    </Box> */}
        <Box className="d-flex py-1">
          <Button color="warning">Limit</Button>
          <Button color="warning">Market</Button>
          <Button color="warning">Stop-Limit</Button>
        </Box>
        <Box className="row px-2">
          <div className='col-lg-6 col-12 g-0'>
            <LimitForm  coin="USDT"/>
          </div>
          <div className="col-lg-6 col-12 g-0">
          <LimitForm coin="BTC"/>
          </div>
        </Box>
   </Box>
  )
 } 