import { ThemeProvider } from '@mui/material';
import React, { useState } from 'react'
import { Route,createBrowserRouter,RouterProvider } from 'react-router-dom'
import Index from '../pages/Index';
import Trade from '../pages/Trade'
import PrivateRoute from './PrivateRoute';
import {DarkTheme,LightTheme} from '../elements/global/Theme';
import Navbar from '../elements/global/navbar';
import CssBaseline from '@mui/material/CssBaseline';
export default function Router() {

  const [mode , setMode] = useState('dark')
  // const handleMode=(event)=>{
  //   console.log(mode)
  //   if(mode==='dark'){
  //     setMode('light')
  //   }else{
  //     setMode('dark')
  //   }
  // }
  const pagerouter= createBrowserRouter([
    {
        path:"/",
        element:<PrivateRoute> <Index/> </PrivateRoute>
    },
    {
      path:"/trade",
      element:<PrivateRoute> <Trade/> </PrivateRoute>
    },
  ])  
  return (
    <ThemeProvider theme={DarkTheme} >
        <CssBaseline />
        <RouterProvider router={pagerouter}/>
    </ThemeProvider>
  )
}
