import React from 'react'
import { Box, Typography  } from '@mui/material';
import trade from '../../../assets/trade.png'
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import AndroidIcon from '@mui/icons-material/Android';
import LocalMallIcon from '@mui/icons-material/LocalMall';
function TrideAny() {
    return (
        <Box className="row" sx={{py: 15}}>
            <Box className="col-lg-5 col-12">
                <Box className="pictrade">
                    <img src={trade} width="100%" style={{ objectFit: "cover" }} alt="" />
                </Box>
            </Box>
            <Box className="col-lg-6 col-12 mt-lg-0 mt-5" sx={{textAlign:"center"}}>
                <Typography variant="p" component="div" sx={{  fontSize: "40px", fontWeight: "bold", lineHeight: "3rem", pb: 4 }}>
                    Trade Anytime, Anywhere
                </Typography>
                <Box className='socialicon d-flex flex-wrap'>
                    <Box className="col-5 text-end py-3">
                       <AppleIcon sx={{fontSize: "3.5rem"}}/>
                    </Box>
                    <Box className="col-5 py-3">
                        <GoogleIcon sx={{fontSize: "3.5rem"}}/>
                    </Box>
                    <Box className="col-5 text-end py-3">
                        <AndroidIcon sx={{fontSize: "3.5rem"}}/>
                    </Box>
                    <Box className="col-5 py-3">
                       <LocalMallIcon sx={{fontSize: "3.5rem"}}/>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default TrideAny