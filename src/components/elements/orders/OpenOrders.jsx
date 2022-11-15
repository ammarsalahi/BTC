import React from 'react'
import { IconButton, Collapse, Container, Box, Typography, Select, TextField, MenuItem, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import PropTypes from 'prop-types';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function OpenOrders() {

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
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Filled</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right">Trigger Conditions</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      <Box>
            <p>test</p>
          </Box>
    </Box>
  )
}