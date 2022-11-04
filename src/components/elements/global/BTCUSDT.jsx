import { Menu, MenuItem ,TextField,InputAdornment, Button,Box, List, ListItem, ListItemIcon, ListItemText, TableContainer, Table, TableBody, TableRow, TableCell} from '@mui/material';
import {ArrowDropDown, ArrowDropUp, ArrowUpward, CurrencyBitcoin, Search, Star, Upcoming} from '@mui/icons-material';
import React from 'react'
import { Tab } from 'bootstrap';

const trs={
   '& td,& th': { border: 0 ,px:1,textAlign:"center",fontSize:"15px"},
   cursor:"pointer",
}

function createData(name,price,changes,nickname) {
   return {  name,price,changes};
}

const data=[
   createData("Bitcoin","$20,728,00","+1.23",'BTC'),
   createData("Ethereum","$1,900,010","+1.25",'TET'),
   createData("Usd","$3,009,120","+1",'USD'),
   createData("Bitcoin","$20,728,00","+1.23",'BTC'),
   createData("Ethereum","$1,900,010","+1.25",'TET'),
   createData("Usd","$3,009,120","+1",'USD'),
   createData("Bitcoin","$20,728,00","+1.23",'BTC'),
   createData("Ethereum","$1,900,010","+1.25",'TET'),
   createData("Usd","$3,009,120","+1",'USD'),
   createData("Bitcoin","$20,728,00","+1.23",'BTC'),
   createData("Ethereum","$1,900,010","+1.25",'TET'),
   createData("Usd","$3,009,120","+1",'USD'),
]

const coins=[
   createData('Favorites'),
   createData('All'),
   createData('Top'),
   createData('FanTokens'),
   createData('Memes'),
   createData('Blockchain'),
   createData('GameFi'),
   createData('Layer2'),
   createData('Storage'),
   createData('DeFi'),
]
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
                style:{height:"30px"}
            }}
         /> 
         <Box className="d-flex gx-0 pt-2 overflow-auto" sx={{width:"100%"}} >
             
             {coins.map((coin,idx)=>(
               <Button color="inherit" sx={{m:0.6}} key={idx}>
                        {coin.name}
               </Button>
             ))}   
        </Box>
        <Box >
         <TableContainer sx={{height:"300px",pt:1}}>
            <Table>
               <TableBody>
                  {data.map((item,idx)=>(
                     <TableRow key={idx} sx={trs} button >
                        <TableCell className='d-flex'>
                         <Star fontSize='x-small'/>  
                        <CurrencyBitcoin sx={{mr:1,color:"orange"}}/>
                          <div>
                           {item.name}
                          </div>
                        </TableCell>
                        <TableCell>{item.price}</TableCell>
                        <TableCell sx={{color:"green"}}>{item.changes}</TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
        </Box>
       </div>

      
     </Menu>
  )
}
