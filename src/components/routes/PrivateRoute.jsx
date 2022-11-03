import React,{useState} from 'react'
import Navbar from '../elements/global/Navbar';
import SideMenu from '../elements/global/SideMenu'

export default function PrivateRoute({children}) {
  const [open,setOpen]=useState(false)
  const handle=(props)=>(event)=>{
    setOpen(props)
    console.log(props)
  }
  return (
      <div>
        <Navbar open={handle(true)}/>
        <div>
            {children}
            <SideMenu open={open} close={handle(false)}/>
        </div>
         
        </div>
  )
}
