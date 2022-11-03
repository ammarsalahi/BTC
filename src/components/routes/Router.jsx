import { ThemeProvider } from '@mui/material';
import React, { useState } from 'react'
import { Route,createBrowserRouter,RouterProvider } from 'react-router-dom'
import Index from '../pages/Index';
import Trade from '../pages/Trade'
import Login from '../pages/Login'
import Register from '../pages/Register'
import PrivateRoute from './PrivateRoute';
import {DarkTheme,LightTheme} from '../elements/global/Theme';
export default function Router() {

  const [mode , setMode] = useState(false)

  const pagerouter= createBrowserRouter([
    {
        path:"/",
        element:<PrivateRoute> <Index/> </PrivateRoute>
    },
    {
      path:"/trade",
      element:<PrivateRoute> <Trade/> </PrivateRoute>
    },
    {
      path:"/login",
      element:<Login/> 
    },
    {
      path:"/register",
      element: <Register/>
    },
  ])  
  return (
    <ThemeProvider theme={mode? DarkTheme : LightTheme}>
      <RouterProvider router={pagerouter}/>
    </ThemeProvider>
  )
}
