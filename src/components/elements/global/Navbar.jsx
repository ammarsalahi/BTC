import { DarkMode, LightMode ,Menu as MenuIcon } from '@mui/icons-material'
import { AppBar, Toolbar, Typography,Box,IconButton,Button, Icon } from '@mui/material'
import React,{useState,useEffect} from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import PropTypes from 'prop-types';


export default function Navbar() {

  
  return (
    <Box>
      <AppBar sx={{height:"60px"}} color="dark" position="static">
        <Toolbar sx={{width:"auto"}}>
          <Box  sx={{flexGrow:1,display:"flex"}}>
            <Typography variant="h5" component="div" sx={{color:'gold',mr:4}}>
              BTC
            </Typography>
             <Box className='d-lg-block d-md-block d-none '>
             <Button color="inherit">BuyCrypto</Button>
             <Button color="inherit" sx={{mx:'15px'}}>Markets</Button>
             <Button color="inherit">Trade</Button>
             </Box>
          </Box>
            
            <Box className="d-flex justify-content-between d-lg-block d-md-block d-none ">
              <Button color='golding'>Login</Button>
              <Button variant="contained" color="golding" sx={{mx:'15px'}}>register</Button>
            <IconButton>
                 <DarkMode sx={{color:"white"}}/>
            </IconButton>
            </Box>  
            <Box className="d-lg-none d-md-none d-block ">
            <IconButton color="warning">
              <MenuIcon/>
            </IconButton>
            </Box>
            
        </Toolbar>
      </AppBar>
    </Box>
  )
}
