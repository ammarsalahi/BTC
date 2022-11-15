import { Box, Typography } from '@mui/material'
import React from 'react';
import {TableContainer,Table,TableBody,TableRow,TableHead ,TableCell} from '@mui/material'
import { ArrowUpward } from '@mui/icons-material';
import {Link} from 'react-router-dom'
const trs={
    '& td,& th': { border: 0 ,p:0.5,textAlign:"left",fontSize:"11px"},
}
const trs2={
  '& td,& th': { border: 0 ,p:0.5,textAlign:"left",fontSize:"11px"},
  '&:hover':{backgroundColor:"grey"}
}

function createData(price,amount,total) {
    return {price,amount,total};
}
const data=[
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
    createData("20640.1","0.00880","181.6323"),
   
]

const getidx=(idx)=>{
    if(idx % 2==0){
      return true
    }else{
      return false;
    }
}
  
export default function PriceList() {
  return (
    <div className="px-2">
        <TableContainer sx={{width:"auto"}}>
          <Table>
            <TableHead>
                <TableRow sx={trs}>
                    <TableCell sx={{color : "#909090"}}>Price(USDT)</TableCell>
                    <TableCell sx={{color : "#909090"}}>Amount(BTC)</TableCell>
                    <TableCell sx={{color : "#909090"}}>Total(BTC)</TableCell>
                </TableRow>
            </TableHead>
            <TableBody sx={{cursor:"pointer"}}>
                    {data.map((d,idx)=>(
                        <TableRow key={idx} sx={trs2}>
                        <TableCell sx={getidx(idx)?{color:"#05c48e"}:{color:'#df473d'}}>{d.price}</TableCell>
                        <TableCell>{d.amount}</TableCell>
                        <TableCell>{d.total}</TableCell>
                        </TableRow>
                    ))}
            </TableBody>

          </Table>
        </TableContainer>
        <Box className="d-flex  py-2 gx-0">
            <Box className="d-flex align-items-center">
              <Typography variant="p" sx={{fontSize:"14px",color:"rgb(14, 203, 129)",pr:1}}>
                20,637.99 <ArrowUpward fontSize="small"/>
              </Typography>
              <Typography variant="p" sx={{fontSize:"11px",color:"grey"}}>
                $20,637.99
              </Typography>
            </Box>
            <Link style={{paddingLeft:"10%",fontSize:"11px"}}>more</Link>
        </Box>
        <TableContainer>
          <Table>
            <TableBody sx={{cursor:"pointer"}}>
                    {data.map((d,idx)=>(
                        <TableRow key={idx} sx={trs2}>
                        <TableCell sx={{color:"#df473d"}}>{d.price}</TableCell>
                        <TableCell>{d.amount}</TableCell>
                        <TableCell>{d.total}</TableCell>
                        </TableRow>
                    ))}
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  )
}
