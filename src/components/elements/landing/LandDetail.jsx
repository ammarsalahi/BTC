import React from 'react'
import { Box, Typography } from '@mui/material'
const fontstyle = {
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "24px",
}
const fontstyle2 = {
  fontWeight: 600,
  fontSize: "40px",
  lineHeight: "48px",
}
export default function LandDetail() {
  return (
      <Box sx={{ pt: 15 , px: 0 }} className="land-detail ">
        <Box className="row justify-content-between w-100">
          <Box className="col-3  my-md-5">
            <Typography variant="h4" component="div" style={fontstyle2}>
              $1 Billion
            </Typography>
            <Typography variant="span" component="div" style={fontstyle}>
              24h tranding volume on BitMnc <br /> exchange
            </Typography>
          </Box>
          <Box className="col-3 my-md-5">
            <Typography variant="h4" component="div" style={fontstyle2}>
              +200
            </Typography>
            <Typography variant="span" component="div" style={fontstyle}>
              Cryptocurrencies listed
            </Typography>
          </Box>
          <Box className="col-3 land-title my-md-5">
            <Typography variant="h4" component="div" style={fontstyle2}>
              200+
            </Typography>
            <Typography variant="span" component="div" style={fontstyle}>
              Regional service centers
            </Typography>
          </Box>
          <Box className="col-3 land-title  my-md-5">
            <Typography variant="h4" component="div" style={fontstyle2}>
              &#60; 0.10%
            </Typography>
            <Typography variant="span" component="div" style={fontstyle}>
              Lowest transaction fees
            </Typography>
          </Box>
      </Box>
    </Box>
  )
}
