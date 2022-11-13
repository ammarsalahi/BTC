import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import OpenOrders from '../elements/orders/OpenOrders';
import OrderHistory from '../elements/orders/OrderHistory';
import TradeHistory from '../elements/orders/TradeHistory';
import TabPanel from '../elements/global/TabPanel';
function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Orders() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{height:"100vh"}}
      className="container-fluid row gx-0"
    >
     <Box className='col-lg-3 g-0' sx={{borderRight:'1px solid',borderColor: 'divider'}}>
        <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{width:"100%" }}
          >
            <Tab label="Open Orders" sx={{py:3}} {...a11yProps(0)} />
            <Tab label="Order History" sx={{py:3}} {...a11yProps(1)} />
            <Tab label="Trade History" sx={{py:3}} {...a11yProps(2)} />
          
          </Tabs>
     </Box>
      <Box className="col-lg-9 gx-0" sx={{height:"100vh"}}>
       {value===0 && <OpenOrders/>}
       {value===1 && <OrderHistory/>}
       {value===2 && <TradeHistory/>}
      </Box>
    </Box>
  );
}
