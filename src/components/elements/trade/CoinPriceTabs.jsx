import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {TableContainer,Table,TableBody,TableRow,TableHead,TableCell } from '@mui/material'
import TabPanel from '../global/TabPanel';
const trs={
  '& td,& th': { border: 0 ,py:1,textAlign:"center",fontSize:"10px"},
}
const trs2={
  '& td,& th': { border: 0 ,py:1,textAlign:"left",fontSize:"10px"},
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default function CoinPriceTabs({data}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: 'auto' }}>
    {/* <Box>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Market Trade" {...a11yProps(0)} sx={value===0 && {borderTop:"2px solid orange"}}/>
        <Tab label="My Trade" {...a11yProps(1)} sx={value===1 && {borderTop:"2px solid orange"}}/>
      </Tabs>
    </Box> */}
    <TableContainer className='overflow-auto'>
          <Table>
            <TableHead>
                <TableRow sx={trs}>
                    <TableCell>Price(USDT)</TableCell>
                    <TableCell>Amount(USDT)</TableCell>
                    <TableCell>Time</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                    {data.map((d,idx)=>(
                        <TableRow key={idx} sx={trs}>
                        <TableCell sx={{color:'green'}}>{d.name}</TableCell>
                        <TableCell>{d.price}</TableCell>
                        <TableCell>{d.changes}</TableCell>
                        </TableRow>
                    ))}
            </TableBody>
          </Table>
        </TableContainer>
    
  </Box>
  );
}
