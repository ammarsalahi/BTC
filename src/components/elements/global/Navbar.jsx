import { DarkMode, LightMode } from '@mui/icons-material'
import { AppBar, Toolbar, Typography,Box,IconButton,Button } from '@mui/material'
import React,{useState,useEffect} from 'react'

export default function Navbar({modeprop}) {

  const [mode,setMode]=useState(modeprop);

  useEffect(()=>{
    setMode(modeprop);
  },[modeprop]);

  const handleMode=(event)=>{
    if(mode===true){
      setMode(false)
    }else{
      setMode(true)
    }
  }
  return (
    <Box>
      <AppBar sx={{height:"60px"}} color="dark">
        <Toolbar sx={{width:"100%"}}>
            <Typography variant="h5" component="div" sx={{color:'gold',mr:4}}>
              BTC
            </Typography>
            <Box sx={{flexGrow:1,display:"flex"}}>
            <Button color="inherit">BuyCrypto</Button>
            <Button color="inherit" sx={{mx:'15px'}}>Markets</Button>
            <Button color="inherit">Trade</Button>
            </Box>
            <Box className="d-flex justify-content-between">
              <Button color='golding'>Login</Button>
              <Button variant="contained" color="golding" sx={{mx:'15px'}}>register</Button>
            <IconButton onClick={handleMode}>
             {mode===true?<DarkMode sx={{color:"white"}}/>:<LightMode sx={{color:"gold"}}/>}
            </IconButton>
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
