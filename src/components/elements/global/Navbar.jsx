import { CurrencyBitcoin, DarkMode, LightMode ,Menu as MenuIcon } from '@mui/icons-material'
import { AppBar, Toolbar, Typography,Box,IconButton,Button} from '@mui/material'
import React,{useState,useEffect} from 'react'
import BTCUSDT from './BTCUSDT';
import MenuItemsComponents from './MenuItemsComponents';

const cryptoitem=[
  {"name":"Bitcoin"},
  {"name":"USDT"},
  {"name":"DOGE"},
  {"name":"Binance"}
]
const tradeitem=[
  {"name":"Spot"},
  {"name":"Margin"},
]
export default function Navbar({open}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);

  const [items, setitems] = useState([]);
  const openm = Boolean(anchorEl);
  const openbtc = Boolean(anchorEl2);

    const handleClick =(data)=>(event) => {
      setAnchorEl(event.currentTarget);
      setitems(data)
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleClickBtc =(event) => {
      setAnchorEl2(event.currentTarget);
    };

    const handleCloseBtc = () => {
      setAnchorEl2(null);
    };
  return (
    <Box>
      <AppBar sx={{height:"60px"}} color="dark" position="static">
        <Toolbar sx={{width:"auto"}}>
          <Box  sx={{flexGrow:1,display:"flex"}}>
            <Typography variant="h5" component="div" sx={{color:'orange',mr:4}}>
              BTC
            </Typography>
             

             <Box className='d-lg-block d-md-block d-none '>
             <Button color="inherit" onClick={handleClickBtc} startIcon={<CurrencyBitcoin color="warning"/>}>
               BTC/USDT
              </Button>
             <Button color="inherit" onClick={handleClick(cryptoitem)}>BuyCrypto</Button>
             <Button color="inherit" sx={{mx:'15px'}}>Markets</Button>
             <Button color="inherit" onClick={handleClick(tradeitem)}>Trade</Button>
             </Box>
          </Box>
            
            <Box className="d-flex justify-content-between d-lg-block d-md-block d-none ">
              <Button color='warning'>Login</Button>
              <Button variant="contained" color="warning" sx={{mx:'15px'}}>Register</Button>
            
            </Box>  
            <IconButton>
                 <DarkMode sx={{color:"white"}}/>
            </IconButton>
            <Box className="d-lg-none d-md-none d-block ">
            <IconButton color="warning" onClick={open}>
              <MenuIcon/>
            </IconButton>
            </Box>
            <MenuItemsComponents
             open={openm}
             anchorEl={anchorEl}
             handleClose={handleClose}
             items={items}
            />
            <BTCUSDT
             open={openbtc}
             anchorEl={anchorEl2}
             handleClose={handleCloseBtc}
            />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
