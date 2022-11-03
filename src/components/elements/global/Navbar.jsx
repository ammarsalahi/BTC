import { DarkMode, LightMode ,Menu as MenuIcon } from '@mui/icons-material'
import { AppBar, Toolbar, Typography,Box,IconButton,Button} from '@mui/material'
import React,{useState,useEffect} from 'react'


export default function Navbar({open}) {

  
  return (
    <Box>
      <AppBar sx={{height:"60px"}} color="dark" position="static">
        <Toolbar sx={{width:"auto"}}>
          <Box  sx={{flexGrow:1,display:"flex"}}>
            <Typography variant="h5" component="div" sx={{color:'orange',mr:4}}>
              BTC
            </Typography>
             <Box className='d-lg-block d-md-block d-none '>
             <Button color="inherit">BuyCrypto</Button>
             <Button color="inherit" sx={{mx:'15px'}}>Markets</Button>
             <Button color="inherit">Trade</Button>
             </Box>
          </Box>
            
            <Box className="d-flex justify-content-between d-lg-block d-md-block d-none ">
              <Button color='warning'>Login</Button>
              <Button variant="contained" color="warning" sx={{mx:'15px'}}>register</Button>
            
            </Box>  
            <IconButton>
                 <DarkMode sx={{color:"white"}}/>
            </IconButton>
            <Box className="d-lg-none d-md-none d-block ">
            <IconButton color="warning" onClick={open}>
              <MenuIcon/>
            </IconButton>
            </Box>
            
        </Toolbar>
      </AppBar>
    </Box>
  )
}
