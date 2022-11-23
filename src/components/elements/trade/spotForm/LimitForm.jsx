import React from 'react'
import { Box, Button, Typography, FormGroup, TextField, InputAdornment, Slider } from '@mui/material'
import BTCSlider from '../../global/BTCSlider';

export default function LimitForm({coin}) {
  const mstyle = {
    m: 1,
    color: "white",
    ml: 0
  }
  const marks = [
    {
      value: 23,
      label: '25%',
    },
    {
      value: 50,
      label: '50%',
    },
    {
      value: 75,
      label: '75%',
    },
  ];

   

  function valuetext(value) {
    return `${value}%`;
  }
  return (
    <div className='pt-2'>
      <Box className='d-flex'>
        <Typography fontSize={13} sx={{ color: "#8c8e90" }} >Avbl-</Typography>
        <Typography fontSize={13} sx={{ color: "#8c8e90" }} >{coin}</Typography>
      </Box>
      <FormGroup>
        <TextField
          placeholder="Price"
          size="small"
          color="light"
          sx={mstyle}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Typography fontSize={12}>
                  20462.23 USDT
                </Typography>

              </InputAdornment>
            ),
            style: { fontSize: 14 }
          }}
        />
        <TextField
          placeholder="Amount"
          size="small"
          color="light"
          sx={mstyle}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Typography fontSize={12}>
                  BTC
                </Typography>
              </InputAdornment>
            ),
            style: { fontSize: 14 }
          }}
        />

        <div className='px-3'>
            <BTCSlider
              max={100}
              min={0}
              marks={marks}
              value={0}
            />
        </div>
        <Button
          variant="outlined"
          color="light"
          sx={mstyle}
        >
          <Typography sx={{ color: "#fff" }}>
            Log in
          </Typography>
          <Typography sx={{ marginInline: "5px" ,color:"#8c8e90"}}>
            or
          </Typography>
          <Typography sx={{ color: "#fff" }}>
            Sign up
          </Typography>

        </Button>
      </FormGroup>
    </div>
  )
}
