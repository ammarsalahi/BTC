import React from 'react'
import {Box,Button,Typography,FormGroup,TextField,InputAdornment,Slider} from '@mui/material'

export default function LimitForm({coin}) {
  const mstyle={
    m:1
  }
  return (
    <div className='px-2 pt-2'>
            <Box className='d-flex'>
             <Typography>Avbl-</Typography>
             <Typography>{coin}</Typography>
            </Box>
            <FormGroup>
                <TextField 
                  color="warning"  
                  placeholder="Price"
                  size="small"
                  sx={mstyle}
                  InputProps={{
                    endAdornment:(
                        <InputAdornment position="end">
                          <Typography fontSize={12}>
                          20462.23 USDT
                          </Typography>
                          
                        </InputAdornment>
                    ),
                    style:{fontSize:14}
                  }}
                />
                <TextField 
                  color="warning"  
                  placeholder="Amount"
                  size="small"
                  sx={mstyle}
                  InputProps={{
                    endAdornment:(
                        <InputAdornment position="end">
                          <Typography fontSize={12}>
                              BTC
                          </Typography>
                        </InputAdornment>
                    ),
                    style:{fontSize:14}
                  }}
                />
                    <Slider
                      aria-label="Small steps"
                      defaultValue={0.00000005}
                      step={0.00000001}
                      marks
                      min={-0.5}
                      max={0.1}
                      sx={mstyle}
                      color="warning"
                      valueLabelDisplay="auto"
                    />
                <Button
                variant="contained"
                color="dark"
                sx={mstyle}
                >
                    Login or Register Now
                </Button>
            </FormGroup>
    </div>
  )
}
