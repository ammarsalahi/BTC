import { Menu, MenuItem ,TextField,InputAdornment, Button} from '@mui/material';
import {ArrowDropDown, ArrowDropUp, ArrowUpward, Search, Upcoming} from '@mui/icons-material';
import React from 'react'

export default function BTCUSDT({open,anchorEl,handleClose}) {
    
    
  return (
     <Menu
        anchorEl={anchorEl}
        open={open}
       onClose={handleClose}
     >
      <div className='p-3' style={{width:"500px"}}>
         <TextField
            size="small"
            fullWidth
            color='warning'
            InputProps={{
                startAdornment:(
                    <InputAdornment position='start'>
                    <Search fontSize="small"/>
                    </InputAdornment>
                ),
                style:{height:"35px"}
            }}
         /> 
         <div className="row text-center py-2">
            <div className="col-4">
               <Button >
                  market
               </Button>
            </div>
            <div className="col-4">
               <Button endIcon={<ArrowDropUp/>}>
                  pair
               </Button>
            </div>
            <div className="col-4">
               <Button endIcon={<ArrowDropDown/>}>
                  change
               </Button>
            </div>
         </div>

       </div>

      
     </Menu>
  )
}
