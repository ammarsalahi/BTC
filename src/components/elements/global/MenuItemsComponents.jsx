import { Menu, MenuItem } from '@mui/material'
import React from 'react'

export default function MenuItemsComponents({items,open,anchorEl,handleClose}) {
    
    
  return (
     <Menu
        anchorEl={anchorEl}
        open={open}
       onClose={handleClose}
     >
       <div>
       {items.map((i,idx)=>(
          <MenuItem key={idx} sx={{width:"150px",color:"orange",'&:hover':{backgroundColor:"orange",color:"#fff"}}} onClick={handleClose}>
             {i.name}
          </MenuItem>
       ))}
        </div> 
      
     </Menu>
  )
}
