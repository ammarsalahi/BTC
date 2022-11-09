import React from 'react'
import {Button,TextField,Typography,Box} from '@mui/material'
import landing from '../../../assets/landing.png';
import space2 from '../../../assets/Space.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination,EffectFlip,Navigation,Autoplay } from 'swiper';

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
SwiperCore.use([Pagination,Navigation,EffectFlip,Autoplay]);

export default function LandHead() {
  return (
    <Box className="row">
            <div className="col-lg-6 col-12">
            <Box sx={{mt:"14%"}}>
                <Typography className='land-head' variant="h3" gutterBottom>Trade at BitMnc<br />Invest in the Future</Typography>
                <Typography className='land-head' variant="h6">Buy, trade, and hold 50+ cryptocurrencies on BitMnc</Typography>
                <Box sx={{ mt:8}} className='land-head'>
                    <div className="row">
                        <div className="col-12">
                            <Button variant="contained" size="large"  color="green" sx={{px:3,fontSize:"large",fontWeight:"bold",cursor:"pointer"}} >
                                Get Started
                            </Button>
                        </div>
                    </div>
                </Box>
            </Box>
            </div>

            <div className="col-lg-6 d-lg-block d-none">
            <Swiper
            effect="fade"
            spaceBetween={60}
            slidesPerView={1}
            loop={true}
            pagination={{
                clickable: true,
              }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            
            >
            <SwiperSlide>
                <Box
                    component="img"
                    sx={{
                    height: 500,
                    width: 600,
                    }}
                    src={landing}
                />
            </SwiperSlide> 
            <SwiperSlide>
                <Box
                    component="img"
                    sx={{
                    height: 500,
                    width: 700,
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
