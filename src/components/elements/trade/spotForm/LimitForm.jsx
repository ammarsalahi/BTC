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
  return (
    <div className='pe-4 pt-2'>
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
          defaultValue={50}
          step={25}
          marks
          min={25}
          max={100}
          sx={mstylerange}
          color="warning"
          size="large"
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
