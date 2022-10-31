import React from 'react'
import Navbar from '../elements/global/navbar'

export default function PrivateRoute({children}) {
  return (
    <div>
        <Navbar/>
        <div>
            {children}
        </div>
    </div>
  )
}
