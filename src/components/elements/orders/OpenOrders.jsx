import React from 'react'
import { IconButton, Collapse, Container, Box, Typography, Select, TextField, MenuItem, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import PropTypes from 'prop-types';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function OpenOrders() {
  function createData(name, crypto, type, side, Average, Price, Executed, Amount, Total, TriggerConditions, Status) {
    return { name, crypto, type, side, Average, Price, Executed, Amount, Total, TriggerConditions, Status };
  }

  const rows = [
    createData('2021-03-31 11:03:18', 'BTCUSDT', 'Market', 'buy', '58985.25', "Market", '0.00005458', '0.0002154', "31.70 USDT", "-", "Filled", 4.0),
  ];

  const filter = [
    { value: "all", label: "all" }
  ]
  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
  return (
    <Box className="container-fluid">
      <Box className="row gx-0 p-4">
        <Typography>Spot</Typography>
        <Typography variant="h4">
          Open Orders
        </Typography>
      </Box>
      <Box className="row mt-5">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <Box className="d-flex">
            <TextField sx={{ mx: 1, width: '160px' }}
              color="light"
              label="Filter"
              size="small"
              select
            >
              {filter.map((item, idx) => (
                <MenuItem value={item.value} key={idx}>
                  {item.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField sx={{ mx: 1, width: '160px' }}
              color="light"
              label="Pair"
              size="small"
              select
            >
              {filter.map((item, idx) => (
                <MenuItem value={item.value} key={idx}>
                  {item.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField sx={{ mx: 1, width: '160px' }}
              color="light"
              size="small"
              label="Side"
              select
            >
              {filter.map((item, idx) => (
                <MenuItem value={item.value} key={idx}>
                  {item.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Button variant="contained" disabled>
            Clear All Filters
          </Button>
        </div>
      </Box>
      <TableContainer sx={{ mt: "2%" }} component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell>Data</TableCell>
              <TableCell align="right">Pair</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Side</TableCell>
              <TableCell align="right">Average</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Executed</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right">Trigger Conditions</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.crypto}</TableCell>
                <TableCell align="right">{row.type}</TableCell>
                <TableCell align="right" sx={row.side === "buy" ? { color: "#05c48e" } : { color: "#df473d" }}>{row.side}</TableCell>
                <TableCell align="right">{row.Average}</TableCell>
                <TableCell align="right">{row.Price}</TableCell>
                <TableCell align="right">{row.Executed}</TableCell>
                <TableCell align="right">{row.Amount}</TableCell>
                <TableCell align="right">{row.Total}</TableCell>
                <TableCell align="center" >{row.TriggerConditions}</TableCell>
                <TableCell align="right" sx={row.side === "Filled" ? { color: "#df473d" } : { color: "#05c48e" }}>{row.Status}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}