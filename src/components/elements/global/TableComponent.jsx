import React from 'react'
import { Table,TableContainer,TableHead,TableBody,TableRow,TableCell,Box } from '@mui/material'
export default function TableComponent({heads,bodys}) {

      const trs2={
        '& td,& th': { border: 0 ,p:0.5,textAlign:"left",fontSize:"11px"},
        '&:hover':{backgroundColor:"rgb(43,49,57)",cursor:"pointer"}
    }
     
  return (

    <Box sx={{ width: 'auto' }}>
        <TableContainer className='overflow-hidden' sx={{maxHeight:100}}>
            <Table>
                <TableBody sx={{height:"200px"}}>
                        {bodys.map((d,idx)=>(
                            <TableRow key={idx} sx={trs2}>
                            <TableCell sx={d.forth==='g' ? { color: "#05c48e",fontSize:"17px" } : { color: '#df473d',fontSize:"17px" }}>{d.first}</TableCell>
                            <TableCell className='text-end' >{d.second}</TableCell>
                            <TableCell className='text-end'>{d.third}</TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
            </TableContainer>
    </Box>
  )
}
