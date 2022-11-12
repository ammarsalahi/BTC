import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import OpenOrders from '../elements/orders/OpenOrders';
import OrderHistory from '../elements/orders/OrderHistory';
import TradeHistory from '../elements/orders/TradeHistory';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 ,width:"100vh"}}>
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
      sx={{ flexGrow: 1, display: 'flex',height:"100vh"}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider',width:250 }}
      >
        <Tab label="Open Orders" sx={{py:3}} {...a11yProps(0)} />
        <Tab label="Order History" sx={{py:3}} {...a11yProps(1)} />
        <Tab label="Trade History" sx={{py:3}} {...a11yProps(2)} />
       
      </Tabs>
      <TabPanel value={value} index={0}>
         <OpenOrders/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <OrderHistory/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TradeHistory/>
      </TabPanel>
      
    </Box>
  );
}
