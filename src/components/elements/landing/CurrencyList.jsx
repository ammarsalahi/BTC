import { Button, Typography ,Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from '@mui/material'
import React from 'react'

import binance from '../../../assets/icons/binance.svg'
import bitcoin from '../../../assets/icons/bitcoin.svg'
import eth from '../../../assets/icons/eth.svg'
import greenm from '../../../assets/icons/greenm.svg'

const trs={
  '& td,& th': { border: 0,px:0},
  '&:hover':{backgroundColor:"#3b3b3b"}
}
const headstyle={
  minWidth:"120px",
  maxWidth:"150px"
}

function createData(name,nick,lastprice,changes,market,icon){
  return {name,nick,lastprice,changes,market}
}

const rows=[
  createData("BNB","BNB","$284.3","-3.37%","$45.868M",'binance'),
  createData("Bitcoin","BTC","$19.990","-0.73%","$383.243M",'bitcoin'),
  createData("Ethereum","ETH","$1.354","-0.38%","$166.163M",'eth'),
  // createData("Galxe","GAL","$2.6","-2.62%","$91M"),
  createData("Green Metaverse Token","GMT","$0.6421","+2.41%","$385M",greenm),

]
export default function CurrencyList() {
  return (
    <Box sx={{py:5,minWidth:"100%"}} className="landlist-m ">
      <div className="d-lg-block d-md-block d-none">
      <Box className=" d-flex justify-content-between " sx={{mb:4}}>
        <Typography variant="h5" className="head-style">
            Popular cryptocurrencies
        </Typography>
        <Button color="inherit" className="head-style">
          view more markets &#62;
        </Button>   
      </Box>
      </div>
      <div className="d-lg-none d-md-none d-block">
      <Box className="text-start d-flex align-items-center ">
        <Typography variant="h5" className="head-style mb-4">
            Popular cryptocurrencies
        </Typography>
        <Button color="inherit" className="head-style">
          view more markets &#62;
        </Button>   
      </Box>
      </div>
      
      <Box className="row">
        <TableContainer className="overflow-auto">
            <Table>
                <TableHead>
                    <TableRow sx={trs}>
                        <TableCell className="text-start head-style">name</TableCell>
                        <TableCell className="text-center head-style">Last Price</TableCell>
                        <TableCell className="text-center head-style">24h Changes</TableCell>
                        <TableCell className="text-end head-style">Market Cup</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                   {rows.map((item,idx)=>(
                      <TableRow key={idx} sx={trs}>
                          <TableCell className="text-start">
                          <Box component="img" sx={{height:20,width:20,cursor:"pointer",mr:1 }}src={bitcoin} />
                            {item.name}    <span style={{color:'grey'}}>{item.nick}</span>

                          </TableCell>
                          <TableCell className="text-center">{item.lastprice}</TableCell>
                          <TableCell className="text-center">{item.changes}</TableCell>
                          <TableCell className="text-end">{item.market}</TableCell>
                     </TableRow>
                    
                   ))}
                </TableBody>
            </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}