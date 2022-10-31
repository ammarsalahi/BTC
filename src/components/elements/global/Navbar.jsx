import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

export default function Navbar() {
  return (
    <AppBar>
        <Toolbar>
            <Typography variant="h3" component="div">
                BTC
            </Typography>
        </Toolbar>
    </AppBar>
  )
}
