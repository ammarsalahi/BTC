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
     <div className="container-fluid row">
        <div className="col-lg-9 col-md-8 col-12 gy-0">
             <TradeHead />
            <div className="row gy-0">
              <div className="col-lg-4 gx-0">
                <PriceList/>
              </div>
              <div className="col-lg-8">
               <TradeChart/>
                <SpotTabs/>
              </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-4 col-12 gx-0 pt-2">
            <ListCoinSearching/>
        </div>
        
      </div>
      <hr/>
      <div className='container-fluid row'>
          <div className="col-12">
            <TradeFooter/>
          </div>
      </div>
    </div>
  )
}
