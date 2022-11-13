import { ThemeProvider } from '@mui/material';
import React, { useState } from 'react'
import { Route,createBrowserRouter,RouterProvider } from 'react-router-dom'
import Index from '../pages/Index';
import Trade from '../pages/Trade'
import Login from '../pages/Login'
import Landing from '../pages/Landing';
import Register from '../pages/Register'
import PrivateRoute from './PrivateRoute';
import Theme from '../elements/global/Theme';
import Navbar from '../elements/global/navbar';
// import Axios from '../elements/landing/axiosTest';
import CssBaseline from '@mui/material/CssBaseline';
import Orders from '../pages/Orders';
export default function Router() {
  const pagerouter= createBrowserRouter([
    {
        path:"/orders",
        element:<PrivateRoute> <Orders/> </PrivateRoute>
    },
    // {
    //     path:"/Axios",
    //     element:<PrivateRoute> <Axios/> </PrivateRoute>
    // },
    {
      path:"/trade",
      element:<PrivateRoute> <Trade/> </PrivateRoute>
    },
   
    {
      path:"/",
      element:<PrivateRoute> <Landing/> </PrivateRoute>
    },
    {
      path:"/login",
      element: <Login/> 
    },
    {
      path:"/signup",
      element: <Register/> 
    },
   
  ])  
  return (
    <ThemeProvider theme={Theme} >
        <CssBaseline />
        <RouterProvider router={pagerouter}/>
    </ThemeProvider>
  )
}
