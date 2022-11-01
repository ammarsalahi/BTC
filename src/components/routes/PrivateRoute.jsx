import React,{useState} from 'react'
import Navbar from '../elements/global/Navbar'
import CssBaseline from '@mui/material/CssBaseline';


export default function PrivateRoute({children}, mode) {

  return (
    <div>
        <Navbar modeprop={mode}/>
        
        <div className='container-btc'>
        <CssBaseline />
            {children}
            
        </div>
    </div>
  )
}
