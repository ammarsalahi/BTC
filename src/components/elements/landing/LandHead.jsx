import React from 'react'
import { Button, TextField, Typography, Box } from '@mui/material'
import landing from '../../../assets/slide1.jpg';
import space2 from '../../../assets/slide2.jpg';
import space3 from '../../../assets/slide3.jpg';
import space4 from '../../../assets/slide4.jpg';
import LightLogo from '../../../assets/logolight.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, EffectFlip, Navigation, Autoplay } from 'swiper';

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
SwiperCore.use([Pagination, Navigation, EffectFlip, Autoplay]);

export default function LandHead() {
    return (
        <Box className="row align-items-center">
            <div className="col-lg-4 col-12 text-start">
                <Box>
                    <Typography sx={{ fontWeight: "600", fontFamily: "Harmony" }} className='land-head' variant="h2" gutterBottom>Trade at BitMNC<br />Invest in the Future</Typography>
                    <Typography sx={{ fontWeight: "600", fontFamily: "Harmony" }} className='land-head' variant="h6">Buy, trade, and hold +250 cryptocurrencies on  <img src={LightLogo} alt="light-logo" width={80} className="gx-0 px-0 mx-0"/> </Typography>
                          
                    <Box sx={{ mt: 8 }} className='land-head'>
                        <div className="row">
                            <div className="col-12 text-start">
                                <Button variant="contained" size="large" color="light" sx={{ px: 7, py: 2, fontSize: "large", fontWeight: "bold", cursor: "pointer", '&:hover': { backgroundColor: "#3b3b3b" } }} >
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    </Box>
                </Box>
            </div>

            <div className="col-lg-8 d-lg-block d-none">
                <Swiper
                    className='text-end'
                    effect="fade"
                    spaceBetween={60}
                    slidesPerView={1}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    // breakpoints={{
                    //     // when window width is >= 640px
                    //     1220: {
                    //         height: "450px"
                    //     },
                    //     // when window width is >= 768px
                    //     768: {
                    //         width: 768,
                    //         slidesPerView: 2,
                    //     },
                    // }}
                >
                    <SwiperSlide>
                        <Box
                            component="img"
                            sx={{
                                height: 700,
                                width: "100%",
                                objectFit: "cover",
                                borderRadius: "5px"
                            }}
                            src={landing}

                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box
                            component="img"
                            sx={{
                                height: 700,
                                width: "100%",
                                objectFit: "cover",
                                borderRadius: "5px"
                            }}
                            src={space2}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box
                            component="img"
                            sx={{
                                height: 700,
                                width: "100%",
                                objectFit: "cover",
                                borderRadius: "5px"
                            }}
                            src={space3}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box
                            component="img"
                            sx={{
                                height: 700,
                                width: "100%",
                                objectFit: "cover",
                                borderRadius: "5px"
                            }}
                            src={space4}
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
