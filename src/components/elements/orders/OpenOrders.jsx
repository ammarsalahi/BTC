import React from 'react'
import { Container,Box ,Typography, Select, TextField} from '@mui/material'

export default function OpenOrders() {
   
   const filter=[
      {"value":"all","label":"all"}
   ]
  return (
    <Container className="container-fluid" >
        <Box className="row">
        <Typography>Spot</Typography>
            <Typography variant="h4">
                Open Orders
            </Typography>
        </Box>
        <Box className="row mt-5">
           <div className="col-12 d-flex justify-content-between align-items-center">
                <Box className="d-flex">
                  <TextField sx={{mx:1}}
                    placeholder="filter" 
                    fullWidth
                    select
                    options={filter}
                  />
                 
                  <Select sx={{mx:1}}>
                  </Select>
                  <Select sx={{mx:1}}>
                  </Select>
                </Box>
           </div>
        </Box>   
    </Container>
  )
}

