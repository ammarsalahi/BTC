import { Star } from '@mui/icons-material'
import { ListItemText, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import ListCoinSearching from '../elements/trade/ListCoinSearching'
import PriceList from '../elements/trade/PriceList'
import TradeChart from '../elements/trade/TradeChart'
import TradeHead from '../elements/trade/TradeHead'
import SpotTabs from '../elements/trade/SpotTabs'
import TradeFooter from '../elements/trade/TradeFooter'
export default function Trade() {
  return (
    <div>
        <div className="container-fluid row gx-0 noscroll">
          <div className="col-lg-8 col-md-6 col-12 gx-0">
            <div className="w-100 p-2 borderbottom">
            <TradeChart/>
            </div>
            <TradeFooter/>

          </div> 
          <div className="col-lg-4 col-md-6 col-12 gx-0 row borderingl">
            <div className="col-lg-6 col-md-6 col-12 overflow-auto borderbottom "  style={{height:"310px"}}>
              <PriceList/>
            </div>
            <div className="col-lg-6 col-md-6 col-12 gx-0 overflow-auto borderbottom borderingl"  style={{height:"310px"}}>
              <ListCoinSearching />
            </div>
            <div className="col-12 gx-0">
              <SpotTabs/>
            </div>
          </div>
         
        </div>
    </div>
  )
}
