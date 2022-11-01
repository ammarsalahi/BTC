import { Search } from '@mui/icons-material'
import { InputAdornment, TextField,Box, Typography } from '@mui/material'
import React from 'react'

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
export default function ListCoinSearching() {
  
  return (
    <div className='px-2'>
      <TextField
            size="small"
            fullWidth
            InputProps={{
                startAdornment:(
                    <InputAdornment position='start'>
                    <Search/>
                    </InputAdornment>
                )
            }}
        /> 
        <Box className="d-flex overflow-hidden">
           {coins.map((coin,idx)=>(
             <Typography variant="p" key={idx} className="mx-2">{coin.name}</Typography>
           ))}
        </Box>
        <Box>
            {data.map((btc,idx)=>(
            <Box className='d-flex justify-content-between mt-1' key={idx}>
                <Typography variant="p">{btc.name}</Typography>
                <Typography variant="p">{btc.price}</Typography>
                <Typography variant="p">{btc.changes}</Typography>
            </Box>
            ))}
        </Box>
       
    </div>
  )
}
