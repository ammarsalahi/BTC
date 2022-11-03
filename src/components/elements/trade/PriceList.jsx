import { Box, Typography } from '@mui/material'
import React from 'react';
import {TableContainer,Table,TableBody,TableRow,TableHead ,TableCell} from '@mui/material'
import { ArrowUpward } from '@mui/icons-material';
import {Link} from 'react-router-dom'
const trs={
    '& td,& th': { border: 0 ,p:0.5,textAlign:"center",fontSize:"11px"},
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
]
  
export default function PriceList() {
  return (
    <div>
        <Box>
        <TableContainer>
          <Table>
            <TableHead>
                <TableRow sx={trs}>
                    <TableCell>Pair</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Changes</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                    {data.map((d,idx)=>(
                        <TableRow key={idx} sx={trs}>
                        <TableCell sx={{color:"green"}}>{d.price}</TableCell>
                        <TableCell>{d.amount}</TableCell>
                        <TableCell>{d.total}</TableCell>
                        </TableRow>
                    ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Box>
        <Box className="d-flex justify-content-between py-2" sx={{px:"11%"}}>
            <Box className="d-flex align-items-center">
              <Typography variant="p" sx={{fontSize:"16px",color:"green"}}>
                20,637.99 <ArrowUpward fontSize="16px"/>
              </Typography>
              <Typography variant="p" sx={{fontSize:"11px",color:"grey"}}>
                $20,637.99
              </Typography>
            </Box>
            <Link>more</Link>
        </Box>
        <Box>
        <TableContainer>
          <Table>
            <TableBody>
                    {data.map((d,idx)=>(
                        <TableRow key={idx} sx={trs}>
                        <TableCell sx={{color:"red"}}>{d.price}</TableCell>
                        <TableCell>{d.amount}</TableCell>
                        <TableCell>{d.total}</TableCell>
                        </TableRow>
                    ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Box>
    </div>
  )
}
