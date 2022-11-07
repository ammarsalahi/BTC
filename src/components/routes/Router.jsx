import { ThemeProvider } from '@mui/material';
import React, { useState } from 'react'
import { Route,createBrowserRouter,RouterProvider } from 'react-router-dom'
import Index from '../pages/Index';
import Trade from '../pages/Trade'
import Login from '../pages/Login'
import Register from '../pages/Register'
import PrivateRoute from './PrivateRoute';
import Theme from '../elements/global/Theme';
import Navbar from '../elements/global/navbar';
import CssBaseline from '@mui/material/CssBaseline';
export default function Router() {

  // const [mode , setMode] = useState('dark')
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
        path:"/index",
        element:<PrivateRoute> <Index/> </PrivateRoute>
    },
    {
      path:"/",
      element:<PrivateRoute> <Trade/> </PrivateRoute>
    },
    {
      path:"/login",
      element: <Login/> 
    },
    {
      path:"/register",
      element: <Register/> 
    },
    {
      path:"/landing",
      element: <Landing/>
    },
  ])  
  return (
    <ThemeProvider theme={Theme} >
        <CssBaseline />
        <RouterProvider router={pagerouter}/>
    </ThemeProvider>
  )
}
