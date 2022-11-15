import { Button, Typography ,Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from '@mui/material'
import React from 'react'
import {ReactComponent as binance} from '../../../assets/icons/binance.svg'
import {ReactComponent as bitcoin} from '../../../assets/icons/bitcoin.svg'
import {ReactComponent as eth} from '../../../assets/icons/eth.svg'
import Svgs from '../global/Svgs'

const trs={
  '& td,& th': { border: 0,px:1,color:"grey"},
}
const trs2={
  '& td,& th': { border: 0,px:1,fontSize:16},
  '&:hover':{backgroundColor:"rgb(43, 49, 57)"}
}
const headstyle={
  minWidth:"120px",
  maxWidth:"150px",
}
const colorgray = {
  color: "rgb(132, 142, 156)"
}
function createData(name,nick,lastprice,changes,market,icon){
  return {name,nick,lastprice,changes,market,icon}
}

const rows=[
  createData("BNB","BNB","$284.3","+3.37%","$45.868M",binance),
  createData("Bitcoin","BTC","$19.990","-0.73%","$383.243M",bitcoin),
  createData("Ethereum","ETH","$1.354","-0.38%","$166.163M",eth),
  // createData("Galxe","GAL","$2.6","-2.62%","$91M"),
  // createData("Green Metaverse Token","GMT","$0.6421","+2.41%","$385M",eth),

]

const getColor=(numberText)=>{
  if(numberText.includes("+")){
    return "#05c48e";
  }else{
    return "#df473d";
  }
}
export default function CurrencyList() {
  return (
    <Box sx={{py:5 , px: 0}} className="landlist-m ">
      <div className="d-lg-block d-md-block d-none">
      <Box className=" d-flex justify-content-between " sx={{mb:4}}>
        <Typography sx={{fontSize:"40px" , fontWeight: "600"}} className="head-style">
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
                        <TableCell className="text-start head-style px-0" style={colorgray}>name</TableCell>
                        <TableCell className="text-center head-style" style={colorgray}>Last Price</TableCell>
                        <TableCell className="text-center head-style" style={colorgray}>24h Changes</TableCell>
                        <TableCell className="text-end head-style px-0" style={colorgray}>Market Cup</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                   {rows.map((item,idx)=>(
                      <TableRow key={idx} sx={trs2}>
                          <TableCell className="text-start px-0">
                            <Svgs Component={item.icon} style={{height:"30px",width:"30px",marginRight:"10px"}}/>
                            {item.name}    <span style={{color:'grey',marginLeft:'1%',fontSize:"13px"}}>{item.nick}</span>

                          </TableCell>
                          <TableCell className="text-center"  >{item.lastprice}</TableCell>
                          <TableCell className="text-center" sx={{color:getColor(item.changes)}}>{item.changes}</TableCell>
                          <TableCell className="text-end px-0">{item.market}</TableCell>
                     </TableRow>
                    
                   ))}
                </TableBody>
            </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}
