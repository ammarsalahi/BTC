import React from 'react'
import { styled } from '@mui/material/styles';
import { Slider } from '@mui/material';
export default function BTCSlider({min,max,value,marks}) {
    
    function valuetext(value) {
        console.log(value)
        return `${value}%`;
    }
    const CustomSlider = styled(Slider)({
        color: '#fff',
        height: 8,
        '& .MuiSlider-track': {
          border: 'none',
        },
        '& .MuiSlider-thumb': {
          height: 20,
          width: 20,
          backgroundColor: '#52af77',
          border: '2px solid currentColor',
          '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
          },
          '&:before': {
            display: 'none',
          },
        },
        '& .MuiSlider-mark': {
          backgroundColor: '#bfbfbf',
          height: 20,
          width: 20,
          borderRadius:10,
          '&.MuiSlider-markActive': {
            opacity: 1,
            backgroundColor: 'currentColor',
          },
        },
        '& .MuiSlider-valueLabel': {
          lineHeight: 1.2,
          fontSize: 12,
          background: 'unset',
          padding: 0,
          width: 32,
          height: 32,
          borderRadius: '50% 50% 50% 0',
          backgroundColor: '#52af77',
          transformOrigin: 'bottom left',
          transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
          '&:before': { display: 'none' },
          '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
          },
          '& > *': {
            transform: 'rotate(45deg)',
          },
        },
      });
  return (
    <div>
        <CustomSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        getAriaValueText={valuetext}
        defaultValue={value}
        marks={marks}
        min={min}
        max={max}
      />
    </div>
  )
}
