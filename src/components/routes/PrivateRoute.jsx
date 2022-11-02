import React,{useState} from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from '../elements/global/navbar';


export default function PrivateRoute({children}, mode) {

  return (
        <div>
        <Navbar />
        <div>
            {children}
        </div>

        </div>
        
  )
}
