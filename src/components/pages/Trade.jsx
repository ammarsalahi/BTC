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
  const [pageheight, setPageHeight] = useState('');
  const [rowheight, setRowHeight] = useState('');
  const [row2height, setRow2Height] = useState('');
  const [row3height, setRow3Height] = useState('');
  const [row4height, setRow4Height] = useState('');

  const getHeightofScreen = () => {
    let size = window.innerHeight;
    setPageHeight(size - 55);
    setRowHeight(size - (size / 2.8))
    setRow2Height(size - (size / 2 + 20))
    setRow3Height((size - (rowheight+80)))
    setRow4Height((size - (rowheight+0)))

  }
  useEffect(() => {
    getHeightofScreen()
    window.addEventListener('resize', getHeightofScreen, false);

  }, [pageheight, rowheight]);

  return (
    <div className='container-fluid' style={{ height: pageheight }}>

      <div className="row ">
        <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-7 col-12 p-0   ">
          <div className="w-100 border-right">
            <TradeChart sizing={rowheight} />
          </div>
          <div className='bordertop'>
            <TradeFooter height={230} />
          </div>

        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-5 col-12 row teeeeeet gx-0   " >
          <div className="col-lg-6 col-md-6 col-12 gx-0  overflow-hidden pricing borderbottom" style={{ height: row2height }}>
            <PriceList />
          </div>
          <div className="col-lg-6 col-md-6 col-12 gx-0 pricing borderbottom borderingl " style={{ height: row2height }}>
            <div className='d-flex justify-content-center'>
              <Typography variant="p" component="div">
                Trade History
              </Typography>
            </div>
            <div>
              <CoinPriceTabs  heights={row2height}/>
            </div>
          </div>
          <div className="col-12 " style={{height:row4height}}>
            <SpotTabs />
          </div>
        </div>


      </div>

    </div>

  )
}
