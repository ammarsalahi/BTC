import { Box, Typography } from '@mui/material'
import React from 'react';
import { TableContainer, Table, TableBody, TableRow, TableHead, TableCell } from '@mui/material'
import { ArrowUpward } from '@mui/icons-material';
import { Link } from 'react-router-dom'
import TableComponent from '../global/TableComponent';
const trs = {
  '& td,& th': { border: 0, py:0.4,px:0, textAlign: "left", fontSize: "11px" },
}
function createData(first, second, third,forth) {
  return { first, second, third ,forth};
}
const data = [
  createData("20640.1", "0.00880", "181.6323",'g'),
  createData("20640.1", "0.00880", "181.6323",'g'),
  createData("20640.1", "0.00880", "181.6323",'g'),
  createData("20640.1", "0.00880", "181.6323",'g'),
  createData("20640.1", "0.00880", "181.6323",'g'),
  createData("20640.1", "0.00880", "181.6323",'g'),
  createData("20640.1", "0.00880", "181.6323",'g'),
  createData("20640.1", "0.00880", "181.6323",'g'),
  createData("20640.1", "0.00880", "181.6323",'g'),
  createData("20640.1", "0.00880", "181.6323",'g'),
]

const data2 = [
  createData("20640.1", "0.00880", "181.6323",'n'),
  createData("20640.1", "0.00880", "181.6323",'n'),
  createData("20640.1", "0.00880", "181.6323",'n'),
  createData("20640.1", "0.00880", "181.6323",'n'),
  createData("20640.1", "0.00880", "181.6323",'n'),
  createData("20640.1", "0.00880", "181.6323",'n'),
  createData("20640.1", "0.00880", "181.6323",'n'),
  createData("20640.1", "0.00880", "181.6323",'n'),
  createData("20640.1", "0.00880", "181.6323",'n'),
  createData("20640.1", "0.00880", "181.6323",'n'),
]



export default function PriceList() {
  return (
    <div className="px-1 py-0">
      <Box className="d-flex justify-content-center align-items-center">
        <Typography>Order Book</Typography>
      </Box>
          <Table>
            <TableHead>
              <TableRow sx={trs}>
                <TableCell>Price(USDT)</TableCell>
                <TableCell>Amount(BTC)</TableCell>
                <TableCell>Total</TableCell>

              </TableRow>
            </TableHead>
          </Table>
        <TableComponent  bodys={data}/>


        <Box className="d-flex justify-content-between align-items-center  py-1 gx-0">
          <Box>
            <Typography variant="p" sx={{ fontSize: "14px", color: "rgb(14, 203, 129)", pr: 1 }}>
              20,637.99 <ArrowUpward fontSize="small" />
            </Typography>
          </Box>
          <Box>
            <Typography variant="p" sx={{ fontSize: "11px", color: "grey" }}>
              $20,637.99
            </Typography>
          </Box>
          <Link style={{ paddingLeft: "10%", fontSize: "11px"}}>more</Link>
        </Box>
        <TableComponent  bodys={data2}/>

    </div>
  )
}
