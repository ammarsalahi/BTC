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
        <Box className="row">
          {/* <div className="col-lg-6 col-12 d-flex justify-content-between">
             <Box className="my-3">
             <Typography variant="h4" component="div" style={fontstyle2}>
              $1 Billion
            </Typography>
            
            <Typography variant="span" component="div" style={fontstyle}>
              24h tranding volume on BitMnc <br /> exchange
            </Typography>
             </Box>
             <Box className="my-3">
             <Typography variant="h4" component="div" style={fontstyle2}>
              $1 Billion
            </Typography>
            
            <Typography variant="span" component="div" style={fontstyle}>
              24h tranding volume on BitMnc <br /> exchange
            </Typography>
             </Box>
          </div>
          <div className="col-lg-6 col-12 d-flex justify-content-between">
             <Box className="my-3">
             <Typography variant="h4" component="div" style={fontstyle2}>
              $1 Billion
            </Typography>
            
            <Typography variant="span" component="div" style={fontstyle}>
              24h tranding volume on BitMnc <br /> exchange
            </Typography>
             </Box>
             <Box className="my-3">
             <Typography variant="h4" component="div" style={fontstyle2}>
              $1 Billion
            </Typography>
            
            <Typography variant="span" component="div" style={fontstyle}>
              24h tranding volume on BitMnc <br /> exchange
            </Typography>
             </Box>
          </div> */}


          <Box className="col-lg-3 col-md-6 col-12 my-lg-0 my-4">
          <Typography variant="h4" component="div" style={fontstyle2}>
              $1 Billion
            </Typography>
            
            <Typography variant="span" component="div" style={fontstyle}>
              24h tranding volume on BitMnc <br /> exchange
            </Typography>
          </Box>
          <Box className="col-lg-3 col-md-6 col-12 my-lg-0 my-4">
            <Typography variant="h4" component="div" style={fontstyle2}>
              +200
            </Typography>
            <Typography variant="span" component="div" style={fontstyle}>
              Cryptocurrencies listed
            </Typography>
          </Box>
          <Box className="col-lg-3 col-md-6 col-12 my-lg-0 my-1 land-title">
            <Typography variant="h4" component="div" style={fontstyle2}>
              +250
            </Typography>
            <Typography variant="span" component="div" style={fontstyle}>
              Regional service centers
            </Typography>
          </Box>
          <Box className="col-lg-3 col-md-6 col-12 land-title my-lg-0 my-4">
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
