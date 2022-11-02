import React,{useState} from 'react'
import Navbar from '../elements/global/Navbar';


export default function PrivateRoute({children}) {
  
  return (
      <div>
        <Navbar />
        <div>
            {children}
        </div>

        </div>
        
  )
}
