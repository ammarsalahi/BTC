import { ArrowBack, ArrowBackIos, ArrowForwardIos, Search } from '@mui/icons-material'
import { InputAdornment, TextField,Box, Typography, TableCell, Button, IconButton } from '@mui/material';
import {TableContainer,Table,TableBody,TableRow,TableHead } from '@mui/material'
import { Swiper, SwiperSlide,useSwiper ,useSwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import React,{useState,useEffect} from 'react'
import CoinPriceTabs from './CoinPriceTabs';

SwiperCore.use([Pagination,Navigation]);

function createData(name,price,changes) {
    return {  name,price,changes};
}

const data=[
    createData("1INCH/BTC","0.040442","+1.23"),
    createData("1INCH/BTC","0.040442","+1.23"),
    createData("1INCH/BTC","0.040442","+1.23"),
    createData("1INCH/BTC","0.040442","+1.23"),
    createData("1INCH/BTC","0.040442","+1.23"),
    createData("1INCH/BTC","0.040442","+1.23"),
    createData("1INCH/BTC","0.040442","+1.23"),
    createData("1INCH/BTC","0.040442","+1.23"),
    createData("1INCH/BTC","0.040442","+1.23"),

]
const coins=[
    createData('Margin'),
    createData('BTC'),
    createData('BUSD'),
    createData('BTB'),
    createData('TET'),
    createData('BIT'),
    createData('DOGE'),
    createData('TRX'),
    createData('ALTS'),
    createData('USD'),
    createData('USDT'),
]

const trs={
    '& td,& th': { border: 0 ,p:1,pl:2,textAlign:"center",fontSize:"11px"},
}
export default function ListCoinSearching() {
  return (
    <div>
      <div className='d-flex jusitfy-content-center align-items-center'>
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
      </div>
      
        <Box className="d-flex justify-content-between gx-0 pt-2 overflow-auto" sx={{width:"auto"}}>
             
             {coins.map((coin,idx)=>(
                    <Button color="warning">
                        {coin.name}
                    </Button>
             ))}   
        </Box>
            

        <TableContainer className='overflow-auto'>
          <Table>
            <TableHead>
                <TableRow sx={trs}>
                    <TableCell>Pair</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Changes</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                    {data.map((d,idx)=>(
                        <TableRow key={idx} sx={trs}>
                        <TableCell>{d.name}</TableCell>
                        <TableCell>{d.price}</TableCell>
                        <TableCell>{d.changes}</TableCell>
                        </TableRow>
                    ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{mt:2}}>
          <CoinPriceTabs data={data}/>
        </Box>
        
       
    </div>
  )
}
