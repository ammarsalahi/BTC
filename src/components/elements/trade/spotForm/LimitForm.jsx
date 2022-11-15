import React from 'react'
import { Box, Button, Typography, FormGroup, TextField, InputAdornment, Slider } from '@mui/material'
import BTCSlider from '../../global/BTCSlider';

export default function LimitForm() {
  const mstyle = {
    m: 1,
    color: "white",
    ml: 0
  }
  const marks = [
    {
      value: 20,
      // label: '25%',
    },
    {
      value: 45,
      // label: '20°C',
    },
    {
      value: 70,
      // label: '37°C',
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
          variant="contained"
          color="dark"
          sx={mstyle}
        >
          <Typography sx={{ color: "#05c48e" }}>
            Log in
          </Typography>
          <Typography sx={{ marginInline: "5px" }}>
            or
          </Typography>
          <Typography sx={{ color: "#df473d" }}>
            Sign up
          </Typography>

        </Button>
      </FormGroup>
    </div>
  )
}
