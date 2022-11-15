import React from 'react'
import { Box, Typography, TextField, Button } from '@mui/material';
import { ReactComponent as customer } from '../../../assets/1.svg'
import test from '../../../assets/33.png'
import Svgs from '../global/Svgs';
const titleStyle = {
    fontWeight: "400",
    color: "rgb(153 153 153)",
    fontSize: "1.125rem",
    lineHeight: "1.9rem",
    fontFamily: "Harmony"
}
const titleStyle2 = {
    fontWeight: "bold",
    fontSize: "1.5rem",
    lineHeight: "3rem",
    fontFamily: "Harmony"
}
function Services() {

    return (
        <Box>
            <Box className='row justify-content-between service mb-5'>
                <Typography variant="p" component="div" sx={{ fontSize: "40px", fontWeight: "bold", lineHeight: "3rem", pt: 8, pb: 4 }}>
                    BitMNC by Your Side
                </Typography>
                <Box className=' col-lg-3 col-md-6 col-12'>
                    <Box>
                        {/* <Svgs Component={customer} style={{ height: "30px", width: "30px", marginRight: "10px" }} />
                        <img src={test} alt="" /> */}
                    </Box>
                    <Typography variant="p" style={titleStyle2}>
                        24/7 Customer Service
                    </Typography>
                    <Typography variant="p" component="div" style={titleStyle}>
                        Contact KuCoin customer support with your questions at any time.
                    </Typography>
                </Box>
                <Box className=' col-lg-3 col-md-6 col-12 '>
                    <Box>
                        {/* <Svgs Component={customer} style={{ height: "30px", width: "30px", marginRight: "10px" }} />
                        <img src={test} alt="" /> */}
                    </Box>
                    <Typography variant="p" style={titleStyle2}>
                        Community
                    </Typography>
                    <Typography variant="p" component="div" style={titleStyle}>
                        The KuCoin Global Community is home to millions of users from 200+ countries, with support for 20+ languages.
                    </Typography>
                </Box>
                <Box className=' col-lg-3 col-md-6 col-12 '>
                    <Box>
                        {/* <Svgs Component={customer} style={{ height: "30px", width: "30px", marginRight: "10px" }} />
                        <img src={test} alt="" /> */}
                    </Box>
                    <Typography variant="p" style={titleStyle2}>
                        BitMNC News
                    </Typography>
                    <Typography variant="p" component="div" style={titleStyle}>
                        Keeping you up to date with the latest news in crypto.
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Services