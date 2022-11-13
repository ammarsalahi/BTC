import { Apps, DarkMode, KeyboardArrowDown, LightMode, Menu as MenuIcon, Language } from '@mui/icons-material'
import { AppBar, Toolbar, Typography, Box, IconButton, Button, ListItemText } from '@mui/material'
import React, { useState, useEffect } from 'react'
import BTCUSDT from './BTCUSDT';
import MenuItemsComponents from './MenuItemsComponents';
import { useLocation, useNavigate, Link } from 'react-router-dom'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DarkLogo from '../../../assets/logodark.png'
import LightLogo from '../../../assets/logolight.png'
const menui = [
  { "name": "ByCrypto" },
  { "name": "Market" },
  { "name": "Trade" },
]
const tradeitem = [
  { "name": "Spot" },
  { "name": "Margin" },
]
export default function Navbar({ open }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  // const [anchorEl3, setAnchorEl3] = useState(null);

  const [items, setitems] = useState([]);
  const openm = Boolean(anchorEl);
  const openbtc = Boolean(anchorEl2);
  // const opendasboard = Boolean(anchorE3);
  let location = useLocation();
  let navigate = useNavigate();
  const handleClick = (data) => (event) => {
    setAnchorEl(event.currentTarget);
    setitems(data)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickBtc = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleCloseBtc = () => {
    setAnchorEl2(null);
  };

  const orders = [
    { "name": "Spot Order" }
  ]
  const wallet = [
    { "name": "Asset Overview" },
    { "name": "Deposit" },
    { "name": "Withdraw" },
  ]
  const csfont = {
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "20px",
    marginRight: "4px",
    userSelect: "none",
    whiteSpace: "nowrap",
  }
  return (
    <Box>
      <AppBar sx={{ height: "60px", backgroundImage: "none" }} color="dark" position="static">
        <Toolbar sx={{ width: "auto" }}>
          <Box sx={{ flexGrow: 1 }} className='d-flex align-items-center'>
            <Typography variant="h5" className="logo" component={Link} to="/"
              sx={{ mr: 4, cursor: "pointer", textDecoration: "none", boxShadow: "none", backgroundImage: "none" }}
            >
              <img src={LightLogo} alt="light-logo" width={130} />
            </Typography>


            {location.pathname === '/trade' ? <Box className='d-lg-block d-md-block d-none'>
              {/* <IconButton onClick={handleClick(menui)}>
                <Apps />
              </IconButton> */}
              <Button color="inherit" sx={{ fontSize: "15px" }} style={csfont} onClick={handleClickBtc}>
                BTC/USDT
                <ArrowDropDownIcon />
              </Button>

            </Box> :
              <Box className='d-lg-block d-md-block d-none'>
                <Button color="inherit">BuyCrypto</Button>
                <Button color="inherit" sx={{ mx: '15px' }}>Discover</Button>
                <Button color="inherit" onClick={() => navigate('/trade')}>Trade</Button>
                <Button color="inherit" sx={{ mx: '15px' }}>Grow</Button>

              </Box>}

            {location.pathname === '/trade' && <Box className='d-lg-block d-md-none d-none pt-2'>
              <div className='d-flex pb-1'>
                <ListItemText
                  className='mx-4'
                  primary={<Typography variant="P" color="error" fontSize={15}>20,637.99</Typography>}
                  secondary={<Typography fontSize={11}>$20,637.99</Typography>}
                />
                <ListItemText
                  primary={<Typography sx={{color :"rgba(255, 255, 255, 0.7)"}} variant="p" fontSize={13}>24h changes</Typography>}
                  secondary={<Typography color="error" fontSize={11}>-86.10 -0.42%</Typography>}
                />

                <ListItemText
                  className='mx-4'
                  primary={<Typography sx={{color :"rgba(255, 255, 255, 0.7)"}} variant="p" fontSize={13}>24h High</Typography>}
                  secondary="20,822.00"
                  secondaryTypographyProps={{ fontSize: "11px", color: "#fff" }}
                />
                <ListItemText
                  primary={<Typography sx={{color :"rgba(255, 255, 255, 0.7)"}} variant="p" fontSize={13} >24h Low</Typography>}
                  secondary="20,237.95"
                  secondaryTypographyProps={{ fontSize: "11px", color: "#fff" }}
                />

                <ListItemText
                  className='mx-4'
                  primary={<Typography sx={{color :"rgba(255, 255, 255, 0.7)"}} variant="p" fontSize={11}>24h Volume(BTC)</Typography>}
                  secondary="314,570.58"
                  secondaryTypographyProps={{ fontSize: "11px", color: "#fff" }}
                />
                <ListItemText
                  primary={<Typography sx={{color :"rgba(255, 255, 255, 0.7)"}} variant="p" fontSize={11}>24h Volume(USDT)</Typography>}
                  secondaryTypographyProps={{ fontSize: "11px", color: "#fff" }}
                  secondary="6,451,473,834.19"
                />
              </div>
            </Box>}
          </Box>

          <Box className="d-flex justify-content-between d-lg-block d-md-block d-none ">
            <Button color="inherit" sx={{ mx: '15px' }} onClick={handleClick(wallet)}>Wallet <ArrowDropDownIcon /></Button>
            <Button color="inherit" sx={{ mx: '15px' }} onClick={handleClick(orders)}>Orders <ArrowDropDownIcon /></Button>
            <Button color='inherit'>log in</Button>
            <Button variant="contained" color="light" className="spacial" component={Link} to="/signup" sx={{ mx: '15px', color: "#000", fontWeight: "bold" }}>sign up</Button>
          </Box>
          <IconButton>
            <DarkMode sx={{ color: "white" }} />
          </IconButton>
          <IconButton>
            <Language sx={{ color: "white" }} />
          </IconButton>
          <Box className="d-lg-none d-md-none d-block ">
            <IconButton color="inherit" onClick={open}>
              <MenuIcon />
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
