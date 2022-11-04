import { Menu, MenuItem ,Box} from '@mui/material'
import React from 'react'

export default function MenuItemsComponents({items,open,anchorEl,handleClose}) {
    
    
  return (
      <Menu
        anchorEl={anchorEl}
        open={open}
       onClose={handleClose}
       sx={{width:"300px"}}
      >
       <Box sx={{width:300}} >
       {items.map((i,idx)=>(
          <MenuItem key={idx} onClick={handleClose}>
             {i.name}
          </MenuItem>
       ))}
        </Box> 
      
     </Menu>
    
  )
}
