import React from 'react'
import { Box, Button, Typography, FormGroup, TextField, InputAdornment, Slider } from '@mui/material'

export default function MarketForm({coin}) {
    const mstyle = {
        m: 1,
        color: "white",
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
    
    <div className='pt-2'>
            <Box className='d-flex'>
                <Typography fontSize={13} sx={{color :"#8c8e90"}} >Avbl-</Typography>
                <Typography fontSize={13} sx={{color :"#8c8e90"}} >{coin}</Typography>
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
          placeholder="Total"
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
       
       
        <div className='px-1'>
          <Slider
              aria-label="Always visible"
              defaultValue={80}
              getAriaValueText={valuetext}
              step={1}
              marks={marks}
              valueLabelDisplay="auto"
          />
          </div>
        <Button
          variant="contained"
          color="dark"
          sx={mstyle}
        >
          <Typography sx={{color: "#05c48e"}}>
            Log in
          </Typography>
          <Typography sx={{marginInline: "5px"}}>
            or
          </Typography>
          <Typography sx={{color: "#df473d"}}>
            Sign up
          </Typography>
        </Button>
      </FormGroup>
    </div>
  )
}
