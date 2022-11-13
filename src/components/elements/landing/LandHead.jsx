import React from 'react'
import { Button, TextField, Typography, Box } from '@mui/material'
import landing from '../../../assets/landing.png';
import space2 from '../../../assets/2.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, EffectFlip, Navigation, Autoplay } from 'swiper';

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
SwiperCore.use([Pagination, Navigation, EffectFlip, Autoplay]);

export default function LandHead() {
    return (
        <Box className="row align-items-center">
            <div className="col-lg-5 col-12 text-start">
                <Box>
                    <Typography className='land-head' variant="h3" gutterBottom>Trade at BitMnc<br />Invest in the Future</Typography>
                    <Typography className='land-head' variant="h6">Buy, trade, and hold +200 cryptocurrencies on BitMnc</Typography>
                    <Box sx={{ mt: 8 }} className='land-head'>
                        <div className="row">
                            <div className="col-12 text-center">
                                <Button variant="contained" size="large" color="light" sx={{ px: 7, py: 2, fontSize: "large", fontWeight: "bold", cursor: "pointer", '&:hover': { backgroundColor: "#3b3b3b" } }} >
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    </Box>
                </Box>
            </div>

            <div className="col-lg-7 d-lg-block d-none">
                <Swiper
                    className='text-center'
                    effect="fade"
                    spaceBetween={60}
                    slidesPerView={1}
                    loop={true}
                    // pagination={{
                    //     clickable: true,
                    //   }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}

                >
                    <SwiperSlide>
                        <Box
                            component="img"
                            sx={{
                                height: 450,
                                width: 550,
                            }}
                            src={landing}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box
                            component="img"
                            sx={{
                                height: 450,
                                width: 450,
                            }}
                            src={space2}
                        />
                    </SwiperSlide>
                </Swiper>
                {/* <Box
                component="img"
                sx={{
                height: 500,
                width: 600,
                }}
                src={landing}
            /> */}
            </div>
        </Box>
    )
}
