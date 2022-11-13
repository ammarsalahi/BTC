import React from 'react'
import { Container,Box ,Typography, Select, TextField, MenuItem} from '@mui/material'
export default function TradeHistory() {
    const filter=[
        {value:"all",label:"all"}
     ]
  return (
    <Box className="container-fluid p-4">
    <Box className="row">
    <Typography>Spot</Typography>
        <Typography variant="h4">
        Trade History
        </Typography>
    </Box>
    <Box className="row mt-5">
       <div className="col-12 d-flex justify-content-between align-items-center">
            <Box className="d-flex">
              <TextField sx={{mx:1,width:'200px'}}
                placeholder="filter" 
                
                label="filter"
                select
              >
                {filter.map((item,idx)=>(
                    <MenuItem value={item.value} key={idx}>
                       {item.label}
                    </MenuItem>
                ))}
              </TextField>
             
              <Select sx={{mx:1}}>
              </Select>
              <Select sx={{mx:1}}>
              </Select>
            </Box>
       </div>
    </Box>   
</Box>
  )
}
