import React,{useState} from 'react'
import Navbar from '../elements/global/Navbar'

export default function PrivateRoute({children}) {
  const [mode, setMode] = useState("dark")
  return (
    <div>
        <Navbar modeprop={mode}/>
        <div className='container-btc'>
            {children}
        </div>
    </div>
  )
}
