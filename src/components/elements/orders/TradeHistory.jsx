import React from 'react'
import {Checkbox ,  IconButton , Collapse ,Container,Box ,Typography, Select, TextField, MenuItem, Button , Table , TableBody ,TableCell ,TableContainer ,TableHead ,TableRow ,Paper} from '@mui/material'
import PropTypes from 'prop-types';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function TradeHistory() {
    // const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
   
   const filter=[
      {value:"all",label:"all"}
   ]
   const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
  return (
    <Box className="container-fluid p-4">
        <Box className="row">
        <Typography>Spot</Typography>
            <Typography variant="h4">
                Order History
            </Typography>
        </Box>
        <Box className="row mt-5">
           <div className="col-12 d-flex justify-content-between align-items-center">
                <Box className="d-flex">
                  <TextField sx={{mx:1,width:'180px'}}
                    color="light"
                    label="Base"
                    size="small"
                    select
                  >
                    {filter.map((item,idx)=>(
                        <MenuItem value={item.value} key={idx}>
                           {item.label}
                        </MenuItem>
                    ))}
                  </TextField>
                 
                  <TextField sx={{mx:1,width:'180px'}}
                    color="light"
                    label="Quote"
                    size="small"
                    select
                  >
                    {filter.map((item,idx)=>(
                        <MenuItem value={item.value} key={idx}>
                           {item.label}
                        </MenuItem>
                    ))}
                  </TextField>
                  <TextField sx={{mx:1,width:'180px'}}
                    color="light"
                    size="small"
                    label="Side"
                    select
                  >
                    {filter.map((item,idx)=>(
                        <MenuItem value={item.value} key={idx}>
                           {item.label}
                        </MenuItem>
                    ))}
                  </TextField>
                  <Button variant="contained" color="yellow">
                    Search
                </Button>
                <Button variant="contained" sx={{ml:"1%", bgcolor:"#808080"}}>
                    Reset
                </Button>
                
                </Box>
                <Button variant="contained" disabled>
                    Clear All Filters
                </Button>
           </div>
        </Box> 
        <TableContainer sx={{mt:"2%"}} component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell align="right">Pair</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Side</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Filled</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Trigger Conditions</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  )
}

