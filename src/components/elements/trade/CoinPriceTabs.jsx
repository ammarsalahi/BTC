import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {TableContainer,Table,TableBody,TableRow,TableHead,TableCell } from '@mui/material'

const trs={
  '& td,& th': { border: 0 ,p:0.5,textAlign:"left",fontSize:"11px"},
}
const trs2={
  '& td,& th': { border: 0 ,px:0.5,py:0.2,textAlign:"left",fontSize:"11px"},
  '&:hover':{backgroundColor:"rgb(43,49,57)",cursor:"pointer"}
}

function createData(name,price,changes) {
  return {  name,price,changes};
}

const data=[
  createData("$20,728,00","0.00550","01:23"),
  createData("$3,009,120","0.06550","14:00"),
  createData("$1,900,010","0.0011","12:25"),
  createData("$3,009,120","0.0055","22:34"),
  createData("$20,728,00","0.00550","01:23"),
  createData("$3,009,120","0.06550","14:00"),
  createData("$1,900,010","0.0011","12:25"),
  createData("$3,009,120","0.0055","22:34"),
  createData("$20,728,00","0.00550","01:23"),
  createData("$3,009,120","0.06550","14:00"),
  createData("$1,900,010","0.0011","12:25"),
  createData("$3,009,120","0.0055","22:34"),
  createData("$20,728,00","0.00550","01:23"),
  createData("$3,009,120","0.06550","14:00"),
  createData("$1,900,010","0.0011","12:25"),
  createData("$3,009,120","0.0055","22:34"),
]
export default function CoinPriceTabs({heights}) {
  const hh=heights-30;
  return (
    <Box >
    <TableContainer sx={{maxHeight:hh}} className="overflow-auto pricing">
          <Table>
            <TableHead>
                <TableRow sx={trs}>
                    <TableCell sx={{color : "#909090"}}>Price(USDT)</TableCell>
                    <TableCell sx={{color : "#909090"}}>Amount(USDT)</TableCell>
                    <TableCell sx={{color : "#909090"}}>Time</TableCell>
                </TableRow>
            </TableHead>
            <TableBody  >
                    {data.map((d,idx)=>(
                        <TableRow key={idx} sx={trs2}>
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
