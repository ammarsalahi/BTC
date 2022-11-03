import React from 'react'
import { Box, Button, Typography, FormGroup, TextField, InputAdornment, Slider } from '@mui/material'

export default function LimitForm({ coin }) {
  const mstyle = {
    m: 1,
    color: "orange",
    ml: 0
  }
  const mstylerange = {
    m: 1,
  }
  const marks = [
    {
      value: 25,
      // label: '25%',
    },
    {
      value: 50,
      // label: '20°C',
    },
    {
      value: 75,
      // label: '37°C',
    },
    {
      value: 100,
      // label: '100°C',
    },
  ];

  function valuetext(value) {
    return `${value}%`;
  }
  return (
    <div className='pe-4 pt-2'>
      <Box className='d-flex'>
        <Typography fontSize={13}>Avbl-</Typography>
        <Typography fontSize={13}>{coin}</Typography>
      </Box>
      <FormGroup>
        <TextField
          color="warning"
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
          color="warning"
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
       
        <Slider
            aria-label="Always visible"
            defaultValue={80}
            getAriaValueText={valuetext}
            step={1}
            marks={marks}
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
