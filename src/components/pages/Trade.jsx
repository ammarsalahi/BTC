import { Star } from '@mui/icons-material'
import { ListItemText, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PriceList from '../elements/trade/PriceList'
import TradeChart from '../elements/trade/TradeChart'
import TradeHead from '../elements/trade/TradeHead'
import SpotTabs from '../elements/trade/SpotTabs'
import TradeFooter from '../elements/trade/TradeFooter'
import CoinPriceTabs from '../elements/trade/CoinPriceTabs'

export default function Trade() {
  const [pageheight,setPageHeight]=useState('');
  const [rowheight,setRowHeight]=useState('');
  const getHeightofScreen=()=>{
    setPageHeight(window.innerHeight-55);
    setRowHeight((window.innerHeight)/2)
  }
  useEffect(()=>{
    getHeightofScreen()
    window.addEventListener('resize',getHeightofScreen,false);
    
  },[pageheight,rowheight]);

  return (
    <div className='container-fluid' style={{height:pageheight}}>
                  {/* <TradeHead/> */}

       <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-7 col-12">
            
            <TradeChart sizing={rowheight} />
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-5 col-12 row overflow-auto" style={{height:rowheight}}>
            <div className="col-lg-6 col-md-6 col-12 gx-0">
              <PriceList/>
            </div>
            <div className="col-lg-6 col-md-6 col-12 gx-0">
              <CoinPriceTabs/>
            </div>
          </div>
       </div>
       <div className="row">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12" >
          <TradeFooter height={rowheight}/>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col1">
          <SpotTabs/>
        </div>
       </div>

    </div>
         
  )
}
