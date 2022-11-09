import React from 'react'
import {Box,Typography} from '@mui/material'
export default function LandDetail() {
  return (
    <Box sx={{py:5}} className="land-detail">
    <Box className="row text-start">
         <div className="col-lg-3 col-6">
                <Typography variant="h4" component="div">
                    $1 Billion
                </Typography>
                <Typography variant="span" component="div" fontSize={12}>
                    24h tranding volume on binance <br/> exchange
                </Typography>
         </div>
         <div className="col-lg-3 col-6">
                <Typography variant="h4" component="div">
                    50+
                </Typography>
                <Typography variant="span" component="div" fontSize={12}>
                    Cryptocurrencies listed
                </Typography>
         </div>
         <div className="col-lg-3 col-6 land-title">
                <Typography variant="h4" component="div">
                    200+
                </Typography>
                <Typography variant="span" component="div" fontSize={12}>
                   Regional service centers
                </Typography>
         </div>
         <div className="col-lg-3 col-6 land-title">
                <Typography variant="h4" component="div">
                  &#60; 0.10%
                </Typography>
                <Typography variant="span" component="div" fontSize={12}>
                    Lowest transaction fees
                </Typography>
         </div>
      </Box>
    </Box>
  )
}
