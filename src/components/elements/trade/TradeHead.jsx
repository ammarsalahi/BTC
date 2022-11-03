import { CurrencyBitcoinOutlined, Star } from '@mui/icons-material'
import { ListItemText, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
export default function TradeHead() {
  return (
    <div className="text-center py-3 ">
    <div className="row">
      <div className="col-lg-2 col-md-5 col-12 gx-0 border-right">
        <ListItemText 
          primary={
            <Typography variant="h6">BTC/USDT</Typography>
          }
          secondaryTypographyProps={{fontSize:"11px"}}
          secondary={<Link><CurrencyBitcoinOutlined  fontSize="small"/> Bitcon Price</Link>}
        />
      </div>
      <div className="col-lg-3 col-md-7 col-12 gr-0 row">
        <ListItemText 
          className='col-6'
          primary={<Typography variant="P" color="error" fontSize={15}>20,637.99</Typography>}
          secondary={<Typography fontSize={11}>$20,637.99</Typography>}
        />
        <ListItemText  
          className='col-6 gx-0'
          primary={<Typography variant="p" fontSize={13}>24h changes</Typography>}
          secondary={<Typography color="error" fontSize={11}>-86.10 -0.42%</Typography>}
        />
      </div>
      <div className="col-lg-3 col-md-5 col-12 row">
        <ListItemText 
          className='col-6'
          primary={<Typography variant="p" fontSize={13}>24h High</Typography>}
          secondary="20,822.00"
          secondaryTypographyProps={{fontSize:"11px"}}
        />
        <ListItemText 
          className='col-6 gx-0'
          primary={<Typography variant="p" fontSize={13} >24h Low</Typography>}
          secondary="20,237.95"
          secondaryTypographyProps={{fontSize:"11px"}}
        />
      </div>
      <div className="col-lg-4 col-md-7 col-12 row">
        <ListItemText 
          className='col-6'
          primary={<Typography variant="p" fontSize={11}>24h Volume(BTC)</Typography>}
          secondary="314,570.58"
          secondaryTypographyProps={{fontSize:"11px"}}
        />
        <ListItemText 
          className='col-6 gx-0'
          primary={<Typography variant="p" fontSize={11}>24h Volume(USDT)</Typography>}
          secondaryTypographyProps={{fontSize:"11px"}}
          secondary="6,451,473,834.19"
        />
      </div>
    </div>
  </div>
  )
}
