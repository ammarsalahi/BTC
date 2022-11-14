import React from 'react'
import { Box, Button, Typography, FormGroup, TextField, InputAdornment, Slider } from '@mui/material'

export default function StopForm({ coin }) {

  const mstyle = {
    m: 1,
    color: "white",
    ml: 0
  }
  const mstylerange = {
    m: 1,
    color: "white",
    width: "90%",
    mb: 2,
  }
  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 25,
      label: '25°%',
    },
    {
      value: 50,
      label: '50%',
    },
    {
      value: 75,
      label: '75%'
    },
    {
      value: 100,
      label: '100%',
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
          placeholder="Stop"
          size="small"
          sx={mstyle}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Typography fontSize={12}>
                  USDT
                </Typography>

              </InputAdornment>
            ),
            style: { fontSize: 14 }
          }}
        />
        <TextField
          placeholder="Limit"
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
        <div className='px-1'>
          <Slider
            sx={mstylerange}
            aria-label="Temperature"
            defaultValue={80}
            getAriaValueText={valuetext}
            step={1}
            marks={marks}
            valueLabelDisplay="auto"
            min={0}
            max={101}
            style={{ marginBottom: "2rem" }}
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
