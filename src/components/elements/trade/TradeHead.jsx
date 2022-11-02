import { CurrencyBitcoinOutlined, Star } from '@mui/icons-material'
import { ListItemText, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
export default function TradeHead() {
  return (
    <div className="row">
    <div className="col-12 row py-1">
      <div className="col-lg-2 col-md-3 col-6 border-end">
        <ListItemText 
          primary={
            <Typography variant="h5">BTC/USDT</Typography>
          }
          secondary={<Link sx={{color:"gold"}}><CurrencyBitcoinOutlined color="warning" fontSize="small"/> Bitcon Price</Link>}
        />
      </div>
      <div className="col-lg-3 col-md-6 col-6 row">
        <ListItemText 
          className='col-6'
          primary={<Typography variant="P" color="error" sx={{fontSize:"20px"}}>20,637.99</Typography>}
          secondary={<Typography sx={{fontSize:"12px"}}>$20,637.99</Typography>}
        />
        <ListItemText  
          className='col-6'
          primary={<Typography variant="p" sx={{fontSize:"14px"}}>24h changes</Typography>}
          secondary={<Typography color="error" sx={{fontSize:"12px"}}>-86.10 -0.42%</Typography>}
          secondaryTypographyProps={{}}
        />
      </div>
      <div className="col-lg-3 col-md-6 col-6 row">
        <ListItemText 
          className='col-6'
          primary={<Typography variant="p" sx={{fontSize:"14px"}}>24h High</Typography>}
          secondary="20,822.00"
        />
        <ListItemText 
          className='col-6'
          primary={<Typography variant="p" sx={{fontSize:"14px"}}>24h Low</Typography>}
          secondary="20,237.95"
        />
      </div>
      <div className="col-lg-4 col-md-6 col-6 row">
        <ListItemText 
          className='col-6'
          primary={<Typography variant="p" sx={{fontSize:"14px"}}>24h Volume(BTC)</Typography>}
          secondary="314,570.58"
        />
        <ListItemText 
          className='col-6'
          primary={<Typography variant="p" sx={{fontSize:"14px"}}>24h Volume(USDT)</Typography>}
          
          secondary="6,451,473,834.19"
        />
      </div>
    </div>
  </div>
  )
}
