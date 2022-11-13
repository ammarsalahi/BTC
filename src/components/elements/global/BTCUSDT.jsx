import { Menu, MenuItem ,TextField,InputAdornment, Button,Box, List, ListItem, ListItemIcon, ListItemText, TableContainer, Table, TableBody, TableRow, TableCell, Typography} from '@mui/material';
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
   createData('USDT'),
  
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
            
            InputProps={{
                startAdornment:(
                    <InputAdornment position='start'>
                    <Search fontSize="small"/>
                    </InputAdornment>
                ),
                style:{height:"30px"}
            }}
         /> 
         {/* <Box className="d-flex gx-0 pt-2 overflow-auto" sx={{width:"100%"}} >
             
             {coins.map((coin,idx)=>(
               <Button color="inherit" sx={{m:0.6}} key={idx}>
                        {coin.name}
               </Button>
             ))}   
        </Box> */}
        <div className="d-flex justify-content-between align-items-center p-4">
            <Typography variant='p' conponent="div" sx={{cursor:"pointer"}}>
                 Markets
            </Typography>
            <Typography variant='p' conponent="div" sx={{cursor:"pointer"}}>
                 pair <ArrowDropUp/>
            </Typography>
            <Typography variant='p' conponent="div" sx={{cursor:"pointer"}}>
                 changes <ArrowDropDown/>
                 
            </Typography>
        </div>
        <Box className="row">
           <div className="col-4 bordering">
             {coins.map((item,idx)=>(
                <Button key={idx} color="inherit" fullWidth>
                   {item.name}
                </Button>
             ))} 
           </div>
           <div className="col-8">
                  <TableContainer sx={{height:"300px",pt:1}}>
                     <Table>
                        <TableBody>
                           {data.map((item,idx)=>(
                              <TableRow key={idx} sx={trs} button >
                                 <TableCell className='d-flex'>
                                 <Star fontSize='x-small'/>  
                                 <CurrencyBitcoin sx={{mr:1}}/>
                                 <div>
                                    {item.name}
                                 </div>
                                 </TableCell>
                                 <TableCell sx={{color:"#008800"}}>{item.changes}</TableCell>
                              </TableRow>
                           ))}
                        </TableBody>
                     </Table>
                  </TableContainer>
           </div>
        </Box>
       </div>

      
     </Menu>
  )
}
