import { Apps, CurrencyBitcoin, DarkMode, LightMode ,Menu as MenuIcon, MenuBook } from '@mui/icons-material'
import { AppBar, Toolbar, Typography,Box,IconButton,Button,ListItemText} from '@mui/material'
import React,{useState,useEffect} from 'react'
import BTCUSDT from './BTCUSDT';
import MenuItemsComponents from './MenuItemsComponents';

const menui=[
  {"name":"ByCrypto"},
  {"name":"Market"},
  {"name":"Trade"},
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
      <AppBar sx={{height:"55px"}} color="dark" position="static">
        <Toolbar sx={{width:"auto"}}>
          <Box  sx={{flexGrow:1,display:"flex"}}>
            <Typography variant="h5" component="div" sx={{color:'orange',mr:2,pt:1}}>
              BTC
            </Typography>
             

             <Box className='d-lg-block d-md-block d-none pt-2'>
                  <IconButton onClick={handleClick(menui)}>
                    <Apps/>
                  </IconButton>
                  <Button color="inherit" sx={{fontSize:"15px"}} onClick={handleClickBtc}>
                   BTC/USDT
                  </Button> 
                 
                 
             {/* <Button color="inherit" onClick={handleClick(cryptoitem)}>BuyCrypto</Button>
             <Button color="inherit" sx={{mx:'15px'}}>Markets</Button>
             <Button color="inherit" onClick={handleClick(tradeitem)}>Trade</Button> */}
             </Box>
             <Box className='d-lg-block d-md-block d-none'>
                 <div className='d-flex pb-2'>
                 <ListItemText 
                   className='mx-3'
                    primary={<Typography variant="P" color="error" fontSize={15}>20,637.99</Typography>}
                    secondary={<Typography fontSize={11}>$20,637.99</Typography>}
                  />
                  <ListItemText  
                    primary={<Typography variant="p" fontSize={13}>24h changes</Typography>}
                    secondary={<Typography color="error" fontSize={11}>-86.10 -0.42%</Typography>}
                  />
              
                  <ListItemText 
                  className='mx-3'
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
                  className='mx-3'
                    primary={<Typography variant="p" fontSize={11}>24h Volume(BTC)</Typography>}
                    secondary="314,570.58"
                    secondaryTypographyProps={{fontSize:"11px"}}
                  />
                  <ListItemText 
                    primary={<Typography variant="p" fontSize={11}>24h Volume(USDT)</Typography>}
                    secondaryTypographyProps={{fontSize:"11px"}}
                    secondary="6,451,473,834.19"
                  /> 
                 </div>
                 
             </Box>
          </Box>
            
            <Box className="d-flex justify-content-between d-lg-block d-md-block d-none ">
              <Button color='inherit'>Login</Button>
              <Button variant="contained" color="dark" sx={{mx:'15px'}}>Register</Button>
            
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
