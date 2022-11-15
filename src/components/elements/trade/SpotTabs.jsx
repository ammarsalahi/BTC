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
import Theme from '../global/Theme'
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default function CoinPriceTabs() {
  const [value, setValue] = React.useState(0);
  const [btn, setbtn] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{py:1,px:0.5}}>
      <Tabs value={value} onChange={handleChange}>
        <Tab style={{color: "#8c8e90"}} label="Spot" {...a11yProps(0)} sx={value===0 && {borderTop:"2px solid #fff"}}/>
      </Tabs>
      <TabPanel value={value} index={0}>
         <Box>
          <div className="d-flex pt-2" >
            <Button style={{color: "#8c8e90"}} sx={btn===0?{mx:1,border:1}:{mx:1}} onClick={()=>{setbtn(0)}}>
              Limit
            </Button>
            <Button style={{color: "#8c8e90"}} sx={btn===1?{mx:1,border:1}:{mx:1}} onClick={()=>{setbtn(1)}}>
            Market
            </Button>
            <Button style={{color: "#8c8e90"}} sx={btn===2?{mx:1,border:1}:{mx:1}} onClick={()=>{setbtn(2)}}>
              Stop
            </Button>
          </div>
          <div className="pt-2">
            {btn===0 && 
            <Box className="row">
            <div className='col-lg-6 col-12 g-0'>
              <LimitForm  coin="USDT"/>
            </div>
            <div className="col-lg-6 col-12 g-0">
            <LimitForm coin="BTC"/>
            </div>
          </Box>
            }
            {btn===1 && 
            <Box className="row">
            <div className='col-lg-6 col-12 g-0'>
              <MarketForm  coin="USDT"/>
            </div>
            <div className="col-lg-6 col-12 g-0">
            <MarketForm coin="BTC"/>
            </div>
          </Box>
          
            }
            {btn===2 && 
            <Box className="row">
            <div className='col-lg-6 col-12 g-0'>
              <StopForm  coin="USDT"/>
            </div>
            <div className="col-lg-6 col-12 g-0">
            <StopForm coin="BTC"/>
            </div>
          </Box>
            }
          </div>
         </Box>
      </TabPanel>
   </Box>
  )
 } 