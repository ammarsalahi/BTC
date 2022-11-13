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
      <Box sx={{ py: 5 }} className="land-detail container">
        <Box className="row text-center">
          <div className="col-lg-3 col-6 text-start">
            <Typography variant="h4" component="div" style={fontstyle2}>
              $1 Billion
            </Typography>
            <Typography variant="span" component="div" style={fontstyle}>
              24h tranding volume on BitMnc <br /> exchange
            </Typography>
          </div>
          <div className="col-lg-3 col-6">
            <Typography variant="h4" component="div" style={fontstyle2}>
              +200
            </Typography>
            <Typography variant="span" component="div" style={fontstyle}>
              Cryptocurrencies listed
            </Typography>
          </div>
          <div className="col-lg-3 col-6 land-title">
            <Typography variant="h4" component="div" style={fontstyle2}>
              200+
            </Typography>
            <Typography variant="span" component="div" style={fontstyle}>
              Regional service centers
            </Typography>
          </div>
          <div className="col-lg-3 col-6 land-title text-end">
            <Typography variant="h4" component="div" style={fontstyle2}>
              &#60; 0.10%
            </Typography>
            <Typography variant="span" component="div" style={fontstyle}>
              Lowest transaction fees
            </Typography>
          </div>
      </Box>
    </Box>
  )
}
