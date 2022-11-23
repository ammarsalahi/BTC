import React from 'react'
import { Table,TableContainer,TableHead,TableBody,TableRow,TableCell } from '@mui/material'
export default function TableComponent({heads,bodys}) {
    const trs = {
        '& td,& th': { border: 0, p: 0.5, textAlign: "center", fontSize: "11px" },
    }
    const trs2 = {
        '& td,& th': { border: 0, p: 0.5, textAlign: "center", fontSize: "11px" },
        '&:hover': { backgroundColor: "grey" }
      }
  return (
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow sx={trs}>
                {heads.map((item,idx)=>(
                    <TableCell sx={{ color: "#8c8e90"}} key={idx}>
                       {item.name}
                    </TableCell>
                ))}
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow sx={trs2}>
                  {bodys.map((item,idx)=>(
                    <TableCell key={idx}>
                    {item.name}
                    </TableCell>
                  ))}
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>

  )
}
