import React from 'react'
import { Box, Typography, TextField, Button } from '@mui/material';

function TextInfo() {
    return (
        <div className='text-center py-5'>
            <div>
                <h1 style={{ fontFamily: "Harmony" }}>
                    Begin you crypto journey now
                </h1>
            </div>
            <div className='py-5'>
                <Button variant="contained" size="large" color="light" sx={{ px: 7, py: 1.5, fontSize: "large", fontWeight: "bold", cursor: "pointer", mr: 5, '&:hover': { backgroundColor: "#3b3b3b" } }} >
                    Log in
                </Button>
                <Button variant="contained" size="large" color="light" sx={{ px: 7, py: 1.5, fontSize: "large", fontWeight: "bold", cursor: "pointer", '&:hover': { backgroundColor: "#3b3b3b" } }} >
                    Sign up
                </Button>
            </div>
        </div>
    )
}

export default TextInfo