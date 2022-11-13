import { height } from '@mui/system';
import React,{useEffect,useState} from 'react'
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

export default function TradeChart({sizing}) {
  
  return (
    <div className="pr-2">
      <TradingViewWidget
        symbol="BTCUSDT"
        theme={Themes.DARK}
        locale="fa_IR"
        height={`${sizing}`}
        width="auto"
        // style={{height:"500px"}}
      />
    </div>
  )
}
