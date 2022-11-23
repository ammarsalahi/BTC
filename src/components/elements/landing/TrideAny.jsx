import React from 'react'
import { Box, Typography,Tooltip } from '@mui/material';
import trade from '../../../assets/trade.png'
import googleplay from '../../../assets/googleplay.png';
import apple from '../../../assets/apple.png';
import android from '../../../assets/android.png';
import appstore from '../../../assets/appstore.png';

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
                    <Box className="col-5 text-end py-3 ">
                    <Tooltip title="comming soon" placement='top-end'>
                            <Box sx={{cursor:"pointer"}}>
                                <Box component="img" 
                                    src={googleplay}
                                    sx={{
                                        width:"60px",
                                        mb:1
                                    }}
                                />
                                <Typography variant="p" component="div" fontSize={13} >
                                    Google Play
                                </Typography>
                            </Box>
                       </Tooltip>
                    </Box>
                    <Box className="col-5 py-3">
                    <Tooltip title="comming soon" placement='top'>
                            <Box sx={{cursor:"pointer"}}>
                                <Box component="img" 
                                src={android}
                                sx={{
                                    width:"60px",
                                    mb:1
                                }}
                                 />
                                 <Typography variant="p" component="div" fontSize={13} >
                                Android APK
                                </Typography>
                            </Box>
                       </Tooltip>

                    </Box>
                    <Box className="col-5 text-end py-3">
                    <Tooltip title="comming soon" placement='bottom-end'>
                            <Box sx={{cursor:"pointer"}}>
                                <Box component="img" 
                                    src={appstore}
                                    sx={{
                                        width:"60px",
                                        mb:1
                                    }}
                                />
                                <Typography variant="p" component="div" fontSize={13} >
                                    App Store
                                </Typography>
                            </Box>
                    </Tooltip>            
                        
                    </Box>
                    <Box className="col-5 py-3">
                        <Tooltip title="comming soon">
                            <Box sx={{cursor:"pointer"}}>
                                <Box component="img" 
                                    src={apple}
                                    sx={{
                                        width:"60px",
                                        mb:1
                                    }}
                                />
                                <Typography variant="p" component="div" fontSize={13} >
                                    iOS App
                                </Typography>
                            </Box>
                        </Tooltip>
                                
                           

                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default TrideAny