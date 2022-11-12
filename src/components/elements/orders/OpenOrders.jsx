import React from 'react'
import { Container,Box ,Typography, Select, TextField, MenuItem, Button} from '@mui/material'

export default function OpenOrders() {
   
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
                Open Orders
            </Typography>
        </Box>
        <Box className="row mt-5">
           <div className="col-12 d-flex justify-content-between align-items-center">
                <Box className="d-flex">
                  <TextField sx={{mx:1,width:'180px'}}
                    color="light"
                    label="Filter"
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
                    label="Pair"
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
                </Box>
                <Button variant="contained" disabled>
                    Clear All Filters
                </Button>
           </div>
        </Box>   
    </Box>
  )
}

