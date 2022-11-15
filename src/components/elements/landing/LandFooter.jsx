import React from 'react'
import {Box,Typography,SvgIcon} from '@mui/material';
import telegram from '../../../assets/icons/telegram.svg'
import twitter from '../../../assets/icons/twitter.svg'
import instagram from '../../../assets/icons/instagram.svg'
import youtube from '../../../assets/icons/youtube.svg'
import email from '../../../assets/icons/email.svg'
export default function LandFooter() {
  return (
    <Box className="row text-start landlist-m" sx={{py:10}}>
        <div className="col-lg-6 col-12">
            <Typography variant="h4" component="div">
            BitMNC
            </Typography>
            <Typography variant="h5" component="div">
               making crypto trading easier
            </Typography>
            <Box className="d-flex justify-content-start pt-3">
                <Box component="img" sx={{height:30,width:30,cursor:"pointer" }}src={email} />
                <Box component="img" sx={{height:30,width:30 ,mx:3,cursor:"pointer"}}src={telegram} />
                <Box component="img" sx={{height:30,width:30 ,cursor:"pointer"}}src={instagram} />
                <Box component="img" sx={{height:30,width:30,mx:3,cursor:"pointer" }}src={twitter} />
                <Box component="img" sx={{height:30,width:30,cursor:"pointer" }}src={youtube} />
            </Box>
        </div>
        <div className="col-lg-6 col-12 row land-title">
            <div className="col-6">
              <Typography variant="h5" sx={{mb:2}}>
                About
              </Typography>
              <Typography variant="p">
                About us
              </Typography>
              <br/>
              <Typography variant="p">
                Referral
              </Typography>
              <br/>
              <Typography variant="p">
                Fees
              </Typography>
            </div>
            <div className="col-6">
              <Typography variant="h5" sx={{mb:2}}>
                Support
              </Typography>
              <Typography variant="p">
                support: bitmnc@info.com
              </Typography>
              <br/>
              <Typography variant="p">
              business: bitmnc@info.com
              </Typography>
              <br/>
              <Typography variant="p">
              marketing: bitmnc@info.com
              </Typography>
              <Typography variant="p">
              media: bitmnc@info.com
              </Typography>
            </div>
        </div>
    </Box>
  )
}
