import React,{useEffect,useState} from 'react'
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

export default function TradeChart() {
  const size = {
    height: "40rem"
  }
  return (
    <div className="pl-3">
      <TradingViewWidget
        symbol="BTCUSDT"
        theme={Themes.DARK}
        locale="fa_IR"
        height={size}
        width="auto"
        // style={{height:"500px"}}
      />
    </div>
  )
}
