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
    <Box className="container-fluid">
        <Box className="row gx-0 p-4">
        <Typography>Spot</Typography>
            <Typography variant="h4">
                Trade History
            </Typography>
        </Box>
        <Box className="row mt-5">
           <div className="col-12 d-flex justify-content-between align-items-center">
                <Box className="d-flex">
                  <TextField sx={{mx:1,width:'160px'}}
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
                 
                  <TextField sx={{mx:1,width:'160px'}}
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
                  <TextField sx={{mx:1,width:'160px'}}
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
                  <Button variant="outlined" size="small" color="light" sx={{ml:"1%"}}>
                    Search
                </Button>
                <Button variant="contained" size="small" color="light" sx={{ml:'2%'}}>
                    Reset
                </Button>
                
                </Box>
                <Button variant="contained" color="light" disabled>
                    clear all filters
                </Button>
           </div>
        </Box> 
        <TableContainer sx={{mt:"2%"}} component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell sx={{color:"#8c8e90"}}>data</TableCell>
            <TableCell align="right" sx={{color:"#8c8e90"}}>pair</TableCell>
            <TableCell align="right" sx={{color:"#8c8e90"}}>type</TableCell>
            <TableCell align="right" sx={{color:"#8c8e90"}}>side</TableCell>
            <TableCell align="right" sx={{color:"#8c8e90"}}>price</TableCell>
            <TableCell align="right" sx={{color:"#8c8e90"}}>amount</TableCell>
            <TableCell align="right" sx={{color:"#8c8e90"}}>filled</TableCell>
            <TableCell align="right" sx={{color:"#8c8e90"}}>total</TableCell>
            <TableCell align="right" sx={{color:"#8c8e90"}}>trigger conditions</TableCell>
            <TableCell align="right" sx={{color:"#8c8e90"}}>actions</TableCell>
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