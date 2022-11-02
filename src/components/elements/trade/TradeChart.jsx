import React,{useEffect,useState} from 'react'
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

export default function TradeChart() {
  
  return (
    <div>
      <TradingViewWidget
        symbol="BTCUSDT"
        theme={Themes.DARK}
        locale="en"
        height="400"
        width="650"
        // style={{height:"500px"}}
      />
    </div>
  )
}
