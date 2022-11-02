import React,{useEffect,useState} from 'react'
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

export default function TradeChart() {
  
  return (
    <div>
      <TradingViewWidget
        symbol="BINANCE:BTCUSDT"
        theme={Themes.DARK}
        locale="en"
        autosize
        // style={{height:"500px"}}
      />
    </div>
  )
}
