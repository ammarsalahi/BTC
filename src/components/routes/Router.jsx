import React from 'react'
import { Route,createBrowserRouter,RouterProvider } from 'react-router-dom'
import Index from '../pages/Index';
import Trade from '../pages/Trade'
import PrivateRoute from './PrivateRoute';
export default function Router() {

  const pagerouter= createBrowserRouter([
    {
        path:"/",
        element:<PrivateRoute> <Index/> </PrivateRoute>
    },
    {
      path:"trade",
      element:<PrivateRoute> <Trade/> </PrivateRoute>
    },
  ])  
  return (
    <RouterProvider router={pagerouter}/>
  )
}
