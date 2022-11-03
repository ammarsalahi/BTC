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
    <div className='container-btc'>
      <div className="container-fluid row m-0">
        <div className="col-lg-9 col-md-8 col-12 g-0">
          <TradeHead />
          <div className="row g-0">
            <div className="col-lg-4 col-md-5 col-12 gx-0" id="price">
              <PriceList />
            </div>
            <div className="col-lg-8 col-md-7 col-12 gx-0 d-flex justify-content-center align-items-center" id="tranding">
              <div className='w-100'>
                <TradeChart />
                <SpotTabs />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-12 gx-0" id="coinsearch">
          <ListCoinSearching />
        </div>
        <div className="col-12">
          <TradeFooter />
        </div>
      </div>
      <hr />
      <div className='container-fluid row'>
        <div className="col-12 overflow-auto">
          <TradeFooter />
        </div>
      </div>
    </div>
  )
}
