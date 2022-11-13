import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {TableContainer,Table,TableBody,TableRow,TableHead,TableCell } from '@mui/material'

const trs={
  '& td,& th': { border: 0 ,py:1,px:0.5,textAlign:"left",fontSize:"11px"},
  '&:hover':{backgroundColor:"grey"}
}

function createData(name,price,changes) {
  return {  name,price,changes};
}

const data=[
  createData("Bitcoin","$20,728,00","+1.23"),
  createData("Ethereum","$1,900,010","+1.25"),
  createData("USD","$3,009,120","+1"),
  createData("Bitcoin","$20,728,00","+1.23"),
  createData("Ethereum","$1,900,010","+1.25"),
  createData("USD","$3,009,120","+1"),
  createData("Bitcoin","$20,728,00","+1.23"),
  createData("Ethereum","$1,900,010","+1.25"),
  createData("USD","$3,009,120","+1"),
  createData("Bitcoin","$20,728,00","+1.23"),
  createData("Ethereum","$1,900,010","+1.25"),
]
export default function CoinPriceTabs() {

  return (
    <Box sx={{ width: 'auto' }}>
    <TableContainer className='overflow-auto'>
          <Table>
            <TableHead>
                <TableRow sx={trs}>
                    <TableCell sx={{color : "#909090"}}>Price(USDT)</TableCell>
                    <TableCell sx={{color : "#909090"}}>Amount(USDT)</TableCell>
                    <TableCell sx={{color : "#909090"}}>Time</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                    {data.map((d,idx)=>(
                        <TableRow key={idx} sx={trs}>
                        <TableCell >{d.name}</TableCell>
                        <TableCell sx={{color:'#05c48e'}}>{d.price}</TableCell>
                        <TableCell>{d.changes}</TableCell>
                        </TableRow>
                    ))}
            </TableBody>
          </Table>
        </TableContainer>
    
  </Box>
  );
}
