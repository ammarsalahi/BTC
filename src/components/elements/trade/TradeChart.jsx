import React,{useEffect,useState} from 'react'
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

export default function TradeChart() {
  
  return (
    <div className="pl-3">
      <TradingViewWidget
        symbol="BTCUSDT"
        theme={Themes.DARK}
        locale="fa_IR"
        height="300"
        width="auto"
        // style={{height:"500px"}}
      />
    </div>
  )
}
