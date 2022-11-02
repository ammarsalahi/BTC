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
    <Box sx={{py:2,px:0.5}}>
    <Box>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Spot" {...a11yProps(0)} />
        <Tab label="Cross 3x" {...a11yProps(1)} />
        <Tab label="Isolate 10x" {...a11yProps(2)} />
      </Tabs>
    </Box>
    <TabPanel value={value} index={0}>
        <Box className="d-flex">
          <Button color="warning">Limit</Button>
          <Button color="warning">Market</Button>
          <Button color="warning">Stop-Limit</Button>
        </Box>
        <Box className="d-flex">
            <LimitForm coin="USDT"/>
            <LimitForm coin="BTC"/>
        </Box>
    </TabPanel>
    <TabPanel value={value} index={1}>
    <Box className="d-flex">
    <Button color="warning">Limit</Button>
          <Button color="warning">Market</Button>
          <Button color="warning">Stop-Limit</Button>
        </Box>
        <Box className="d-flex">
            <LimitForm coin="USDT"/>
            <LimitForm coin="BTC"/>
        </Box>
    </TabPanel>
    <TabPanel value={value} index={2}>
    <Box className="d-flex">
          <Button color="warning">Limit</Button>
          <Button color="warning">Market</Button>
          <Button color="warning">Stop-Limit</Button>
        </Box>
        <Box className="d-flex">
            <LimitForm coin="USDT"/>
            <LimitForm coin="BTC"/>
        </Box>
    </TabPanel>
   </Box>
  )
 } 