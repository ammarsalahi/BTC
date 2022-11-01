import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {TableContainer,Table,TableBody,TableRow,TableHead,TableCell } from '@mui/material'
import TabPanel from '../global/TabPanel';
const trs={
  '& td,& th': { border: 0 ,p:1,pl:2,textAlign:"center",fontSize:"12px"},
}
const trs2={
  '& td,& th': { border: 0 ,p:1,pl:2,textAlign:"left",fontSize:"12px"},
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
    <Box sx={{ width: '100%' }}>
    <Box>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Market Trade" {...a11yProps(0)} />
        <Tab label="My Trade" {...a11yProps(1)} />
      </Tabs>
    </Box>
    <TabPanel value={value} index={0}>
    <TableContainer className='overflow-auto' sx={{height:"270px"}}>
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
                        <TableCell>{d.name}</TableCell>
                        <TableCell>{d.price}</TableCell>
                        <TableCell>{d.changes}</TableCell>
                        </TableRow>
                    ))}
            </TableBody>
          </Table>
        </TableContainer>
    </TabPanel>
    <TabPanel value={value} index={1}>
    <TableContainer className='overflow-auto' sx={{height:"270px"}}>
          <Table>
            <TableHead>
                <TableRow sx={trs2}>
                    <TableCell>Price(USDT)</TableCell>
                    <TableCell>Amount(USDT)</TableCell>
                    <TableCell>Time</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                    {data.map((d,idx)=>(
                        <TableRow key={idx} sx={trs2}>
                        <TableCell>{d.name}</TableCell>
                        <TableCell>{d.price}</TableCell>
                        <TableCell>{d.changes}</TableCell>
                        </TableRow>
                    ))}
            </TableBody>
          </Table>
        </TableContainer>
    </TabPanel>
  </Box>
  );
}
