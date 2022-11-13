import { CurrencyBitcoin, CurrencyBitcoinOutlined, Star } from '@mui/icons-material'
import { Button, ListItemText, Typography } from '@mui/material'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import BTCUSDT from '../global/BTCUSDT'

export default function TradeHead() {
  const [anchorEl2, setAnchorEl2] = useState(null);

  const openbtc = Boolean(anchorEl2);

  const handleClickBtc =(event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleCloseBtc = () => {
    setAnchorEl2(null);
  };
  return (
    <div className="row">
        <div className="col-2">
        <Button startIcon={<CurrencyBitcoin color="warning"/>} onClick={handleClickBtc} color="inherit" sx={{my:1}}>
          BTC/USDT
        </Button>
          <BTCUSDT
            open={openbtc}
            anchorEl={anchorEl2}
            handleClose={handleCloseBtc}
          />
        </div>
        <div className="col-10 d-flex">    
        {/* <ListItemText 
          primary={<Typography variant="P" color="error" fontSize={15}>20,637.99</Typography>}
          secondary={<Typography fontSize={11}>$20,637.99</Typography>}
        />
        <ListItemText  
          primary={<Typography variant="p" fontSize={13}>24h changes</Typography>}
          secondary={<Typography color="error" fontSize={11}>-86.10 -0.42%</Typography>}
        />
     
        <ListItemText 
          primary={<Typography variant="p" fontSize={13}>24h High</Typography>}
          secondary="20,822.00"
          secondaryTypographyProps={{fontSize:"11px"}}
        />
        <ListItemText 
          primary={<Typography variant="p" fontSize={13} >24h Low</Typography>}
          secondary="20,237.95"
          secondaryTypographyProps={{fontSize:"11px"}}
        />
     
        <ListItemText 
          primary={<Typography variant="p" fontSize={11}>24h Volume(BTC)</Typography>}
          secondary="314,570.58"
          secondaryTypographyProps={{fontSize:"11px"}}
        />
        <ListItemText 
          primary={<Typography variant="p" fontSize={11}>24h Volume(USDT)</Typography>}
          secondaryTypographyProps={{fontSize:"11px"}}
          secondary="6,451,473,834.19"
        /> */}
        </div>
  </div>
  )
}
